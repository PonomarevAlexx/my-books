import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const LIMIT = 20;

interface State {
    searchQuery: string;
    limit: number;
}

const initialState: State = {
    searchQuery: "",
    limit: LIMIT,
};

export const filteresSlice = createSlice({
    name: "filteres",
    initialState,
    reducers: {
        increaseLimit: (state) => {
            state.limit += LIMIT;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            state.limit = LIMIT;
        },
        resetSearchQueryAndLimit: (state) => {
            state.searchQuery = "";
            state.limit = LIMIT;
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

export const { increaseLimit, setSearchQuery, resetSearchQueryAndLimit } = filteresSlice.actions;
