import type { RootState } from "../store";
import type { Author } from "../../types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL, STATUS_LOADING } from "../../constants/constants";

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
    length: number;
};

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
    length: 0,
};

export const fetchBooks = createAsyncThunk(
    "@books/fetchBooks",
    async ({ searchQuery, limit }: { searchQuery?: string; limit?: number }) => {
        const response = await fetch(`${URL}/books/${limit}?search=${searchQuery}`);

        return await response.json();
    }
);

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
            state.bookList = action.payload.books;
            state.length = action.payload.length;
            console.log(state.bookList, state.length);
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

export const selectLengthBooksList = (state: RootState) => {
    return state.books.length;
};
