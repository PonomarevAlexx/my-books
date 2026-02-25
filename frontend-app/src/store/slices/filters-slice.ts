import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { LIMIT } from "../../constants/constants";

interface State {
    searchQuery: string;
    limit: number;
    currentPage: "authors" | "books" | null;
    perPage: number;
}

const initialState: State = {
    searchQuery: "",
    limit: LIMIT,
    currentPage: null,
    perPage: LIMIT,
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
        },
        setPerPage: (state, action) => {
            state.perPage = action.payload;
            state.limit = action.payload;
        },
    },
});

export const filteresReducer = filteresSlice.reducer;

export const selectSearchQuery = (state: RootState) => {
    return state.filteres.searchQuery;
};

export const selectLimit = (state: RootState) => {
    return state.filteres.limit;
};

export const selectCurrentPage = (state: RootState) => {
    return state.filteres.currentPage;
};

export const { increaseLimit, setSearchQuery, resetSearchQueryAndLimit, setCurrentPage, setPerPage } =
    filteresSlice.actions;
