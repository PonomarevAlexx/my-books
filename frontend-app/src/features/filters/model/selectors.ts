import type { RootState } from "../../../store/store";

export const selectSearchQuery = (state: RootState) => {
    return state.filteres.searchQuery;
};

export const selectLimit = (state: RootState) => {
    return state.filteres.limit;
};
