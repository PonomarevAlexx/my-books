import type { RootState } from "../store";
import type { Author } from "../../types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL, STATUS_LOADING } from "../../constants/constants";

const LIMIT = 12;

type Book = {
    _id: string;
    title: string[];
    author: Author[];
    cover: string;
};

type State = {
    bookList: Book[];
    status: string;
    error: string;
};

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
};

export const fetchBooks = createAsyncThunk("@books/fetchBooks", async () => {
    const response = await fetch(`${URL}/books/${LIMIT}`);

    return await response.json();
});

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.bookList = action.payload;
            console.log(state.bookList);
        });
        builder.addCase(fetchBooks.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const booksReducer = booksSlice.reducer;

export const selectAllBooks = (state: RootState): Book[] => {
    return state.books.bookList;
};

export const selectStatusLoading = (state: RootState) => {
    return state.books.status;
};
