import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING, URL } from "../../constants/constants";
import type { RootState } from "../store";

interface State {
    authorsList: Authors[];
    status: string;
    error: string;
    length: number;
}

interface Authors {
    _id: string;
    name: string;
    photo: string;
}

const initialState: State = {
    authorsList: [],
    status: "",
    error: "",
    length: 0,
};

export const fetchAuthors = createAsyncThunk(
    "@authors/fetchAuthors",
    async ({ searchQuery, limit }: { searchQuery?: string; limit?: number }) => {
        const response = await fetch(`${URL}/authors/${limit}?search=${searchQuery}`);

        return await response.json();
    }
);

export const authorsSlice = createSlice({
    name: "authors",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAuthors.pending, (state) => {
            state.status = STATUS_LOADING.LOADING;
            state.error = "";
        });
        builder.addCase(fetchAuthors.fulfilled, (state, action) => {
            state.status = STATUS_LOADING.RESOLVED;
            state.authorsList = action.payload.authors;
            state.length = action.payload.length;
            console.log(state.authorsList, state.length);
        });
        builder.addCase(fetchAuthors.rejected, (state, action) => {
            state.status = STATUS_LOADING.REJECTED;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const authorsReducer = authorsSlice.reducer;

export const selectAllAuthors = (state: RootState) => {
    return state.authors.authorsList;
};

export const selectLengthAuthorsList = (state: RootState) => {
    return state.authors.length;
};
