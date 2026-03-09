import type { State } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING } from "@/constants/constants";
import { fetchAuthor } from "./authorThunk";

const initialState: State = {
    author: null,
    status: "",
    error: "",
    length: 0,
    booksListAuthor: [],
};

export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuthor.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchAuthor.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.author = action.payload.author;
            state.length = action.payload.length;
            state.booksListAuthor = action.payload.books;
            console.log(state.length, state.booksListAuthor, state.author);
        });
        builder.addCase(fetchAuthor.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const authorReducer = authorSlice.reducer;
