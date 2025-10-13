import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Author, BookShort } from "../../types/types";
import { STATUS_LOADING, URL } from "../../constants/constants";
import type { RootState } from "../store";

interface State {
    author: Author | null;
    status: string;
    error: string;
    length: number;
    booksListAuthor: BookShort[];
}

const initialState: State = {
    author: null,
    status: "",
    error: "",
    length: 0,
    booksListAuthor: [],
};

export const fetchAuthor = createAsyncThunk("@author/fetchAuthor", async (id: string) => {
    const response = await fetch(`${URL}/author/${id}`);

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

export const selectAuthor = (state: RootState) => {
    return state.author.author;
};

export const selectStatus = (state: RootState) => {
    return state.author.status;
};

export const selectListBooksOfAuthor = (state: RootState) => {
    return state.author.booksListAuthor;
};

export const selectLength = (state: RootState) => {
    return state.author.length;
};
