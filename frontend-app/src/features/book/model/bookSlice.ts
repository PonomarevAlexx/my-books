import type { State } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING } from "../../../constants/constants";
import { fetchBook } from "./bookThunks";

const initialState: State = {
    book: null,
    status: "",
    error: "",
};

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
