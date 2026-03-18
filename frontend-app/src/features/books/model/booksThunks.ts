import type { FetchBooksResponse, FetchBookArgs } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getBooks } from "../services/booksService";

export const fetchBooks = createAsyncThunk<FetchBooksResponse, FetchBookArgs, { rejectValue: string }>(
    "@books/fetchBooks",
    async ({ searchQuery, limit, page }, { rejectWithValue }) => {
        try {
            return await getBooks(limit, searchQuery, page);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || "Ошибка загрузки книг");
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    },
);
