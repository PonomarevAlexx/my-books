import type { RootState } from "../store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const LOCAL_URL = "http://localhost:3000/books";
const URL = "http://localhost:3000/api/books";

type Status = {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
};

export type Book = {
    _id: Id;
    title: string[];
    author: Author[];
    year: number;
    quantityOfPages: number;
    isRead: boolean;
    bookSeries: BookSeries;
    publisher: string;
    ISBN: string;
    cover: string;
    idAuthor: string;
    description: string;
};

type Id = {
    $oid: string;
};

type BookSeries = {
    name: string;
    _id: string;
};

type Author = {
    name: string;
    _id: string
}

type State = {
    bookList: Book[];
    status: string;
    error: string;
};

const STATUS_LOADING: Status = {
    LOADING: "loading",
    RESOLVED: "resolved",
    REJECTED: "rejected",
};

const initialState: State = {
    bookList: [],
    status: "",
    error: "",
};

export const fetchBooks = createAsyncThunk("@books/fetchBooks", async () => {
    const response = await fetch(URL);

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