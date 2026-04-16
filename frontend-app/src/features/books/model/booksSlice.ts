import type { State } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING } from "../../../constants/constants";
import { fetchBooks } from "./booksThunks";

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
    length: 0,
    isPagination: false,
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setIsPagination: (state) => {
            state.isPagination = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.status = STATUS_LOADING.LOADING;
                state.error = "";
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.status = STATUS_LOADING.RESOLVED;
                state.isPagination = false;
                state.bookList = action.payload.books;
                state.length = action.payload.length;
                console.log(state.bookList, state.length);
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.status = STATUS_LOADING.REJECTED;
                state.isPagination = false;
                if (typeof action.payload === "string") {
                    state.error = action.payload;
                }
            });
    },
});

export const booksReducer = booksSlice.reducer;

export const { setIsPagination } = booksSlice.actions;
