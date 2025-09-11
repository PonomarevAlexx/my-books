import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AuthorInfo } from "../../types/types";
import { STATUS_LOADING, URL } from "../../constants/constants";
import type { RootState } from "../store";

interface State {
    author: AuthorInfo | null;
    status: string;
    error: string;
}

const initialState: State = {
    author: null,
    status: "",
    error: "",
};

export const fetchAuthor = createAsyncThunk("@author/fetchAuthor", async (id: string) => {
    const response = await fetch(`${URL}/authors/${id}`);

    return await response.json();
});

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
            state.author = action.payload;
            console.log(state.author);
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

export const selectAuthor = (state: RootState) => {
    return state.author.author;
};
