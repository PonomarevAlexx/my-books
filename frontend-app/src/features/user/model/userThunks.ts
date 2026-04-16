import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AuthResponse } from "./types";
import { login, logout, registration } from "@/service/AuthService";
import axios from "axios";

export const loginThunk = createAsyncThunk<AuthResponse, { email: string; password: string }, { rejectValue: string }>(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const data = await login(email, password);
            localStorage.setItem("token", data.accessToken);
            return data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.response?.data?.message || "Request Error");
            }
            return rejectWithValue("Unknown Error");
        }
    },
);

export const registrationThunk = createAsyncThunk<
    AuthResponse,
    { email: string; password: string },
    { rejectValue: string }
>("user/registration", async ({ email, password }, { rejectWithValue }) => {
    try {
        const data = await registration(email, password);
        localStorage.setItem("token", data.accessToken);
        return data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            return rejectWithValue(e.response?.data?.message || "Request Error");
        }
        return rejectWithValue("Unknown error");
    }
});

export const logoutThunk = createAsyncThunk<void, void, { rejectValue: string }>(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            await logout();
            localStorage.removeItem("token");
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.response?.data?.message || "Request Error");
            }
            return rejectWithValue("Unknown error");
        }
    },
);

export const checkAuthThunk = createAsyncThunk<AuthResponse, void, { rejectValue: string }>(
    "user/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<AuthResponse>(`${import.meta.env.VITE_API_URL}/refresh`, {
                withCredentials: true,
            });
            localStorage.setItem("token", response.data.accessToken);
            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                return rejectWithValue(e.response?.data?.message || "Request Error");
            }
            return rejectWithValue("Unknown error");
        }
    },
);
