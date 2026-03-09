import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../services/bookService";
import type { Book, FetchBookArgs } from "./types";
import axios from "axios";

export const fetchBook = createAsyncThunk<Book, FetchBookArgs, { rejectValue: string }>(
    "@book/fetchBook",
    async ({ id }, { rejectWithValue }) => {
        try {
            return await getBook(id);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data?.message || "Ошибка загрузки книги");
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    },
);
