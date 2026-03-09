import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthors } from "../services/authorsService";
import type { FetchAuthorsArgs, FetchAuthorsResponse } from "./types";
import axios from "axios";

export const fetchAuthors = createAsyncThunk<FetchAuthorsResponse, FetchAuthorsArgs, { rejectValue: string }>(
    "@authors/fetchAuthors",
    async ({ searchQuery, limit }, { rejectWithValue }) => {
        try {
            return await getAuthors(limit, searchQuery);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || "Ошибка загрузки автора");
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    },
);
