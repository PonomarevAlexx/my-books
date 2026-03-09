import { createSlice } from "@reduxjs/toolkit";
import type { State } from "./types";

const limit = import.meta.env.VITE_LIMIT_PER_PAGE;
const initialState: State = {
    searchQuery: "",
    limit: limit,
    currentPage: null,
    perPage: limit,
};

export const filteresSlice = createSlice({
    name: "filteres",
    initialState,
    reducers: {
        increaseLimit: (state) => {
            state.limit += state.perPage;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            state.limit = state.perPage;
        },
        resetSearchQueryAndLimit: (state) => {
            state.searchQuery = "";
            state.limit = state.perPage;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
            state.perPage = limit;
            state.limit = limit;
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
            state.limit = action.payload;
        },
    },
});

export const filteresReducer = filteresSlice.reducer;

export const { increaseLimit, setSearchQuery, resetSearchQueryAndLimit, setCurrentPage, setPerPage } =
    filteresSlice.actions;
