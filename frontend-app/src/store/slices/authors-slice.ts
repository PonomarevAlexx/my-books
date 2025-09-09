import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS_LOADING, URL } from "../../constants/constants";
import type { RootState } from "../store";

interface State {
    authorsList: Authors[];
    status: string;
    error: string;
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
};

export const fetchAuthors = createAsyncThunk("@authors/fetchAuthors", async () => {
    const response = await fetch(`${URL}/authors`);

    return await response.json();
});

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
            state.authorsList = action.payload;
            console.log(state.authorsList);
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
