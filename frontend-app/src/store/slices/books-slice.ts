import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type Status = {
    LOADING: "loading";
    RESOLVED: "resolved";
    REJECTED: "rejected";
};

type Book = {
    id: number;
    titles: string[];
    author: string;
    yearOfPublication: number;
    numberOfPages: number;
    seriesOfBooks: string;
    isRead: boolean;
};

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
    const response = await fetch("http://localhost:3000/books");

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
            console.log(state.bookList)
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
