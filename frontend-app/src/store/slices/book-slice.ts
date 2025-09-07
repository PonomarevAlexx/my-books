import type { RootState } from "../store";
import type { Book } from "../../types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL, STATUS_LOADING } from "../../constants/constants";

type State = {
    book: Book;
    status: string;
    error: string;
};

const initialState: State = {
    book: {
        _id: "",
        title: [],
        author: [],
        year: 0,
        quantityOfPages: 0,
        isRead: false,
        bookSeries: { name: "", _id: "" },
        publisher: "",
        ISBN: "",
        cover: "",
        section: "",
        bookBinding: "",
        paper: "",
        weight: 0,
        description: "string",
    },
    status: "",
    error: "",
};

export const fetchBook = createAsyncThunk("@book/fetchBooks", async (id: string) => {
    const response = await fetch(`${URL}/books/${id}`);

    return await response.json();
});

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBook.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchBook.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.book = action.payload;
            console.log(state.book);
        });
        builder.addCase(fetchBook.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const bookReducer = bookSlice.reducer;

export const selectBook = (state: RootState): Book => {
    return state.book.book;
};

export const selectStatusLoading = (state: RootState) => {
    return state.book.status;
};
