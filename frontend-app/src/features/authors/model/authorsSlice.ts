import { createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING } from "../../../constants/constants";
import type { State } from "./types";
import { fetchAuthors } from "./authorsThunk";

const initialState: State = {
    authorsList: [],
    status: "",
    error: "",
    length: 0,
    isPagination: false,
};

export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {
        setIsPagination: (state) => {
            state.isPagination = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthors.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.authorsList = action.payload.authors;
            state.length = action.payload.length;
            state.isPagination = false;
            console.log(state.authorsList, state.length);
        });
        builder.addCase(fetchAuthors.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            state.isPagination = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const authorsReducer = authorsSlice.reducer;

export const { setIsPagination } = authorsSlice.actions;
