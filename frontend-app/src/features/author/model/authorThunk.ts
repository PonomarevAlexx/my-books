import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAuthor } from "../services/authorServices";
import type { FetchAuthorArgs, FetchAuthorResponse } from "./types";
import axios from "axios";

export const fetchAuthor = createAsyncThunk<FetchAuthorResponse, FetchAuthorArgs, { rejectValue: string }>(
    "@author/fetchAuthor",
    async ({ id }, { rejectWithValue }) => {
        try {
            return await getAuthor(id);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || "Ошибка загрузки автора");
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    },
);
