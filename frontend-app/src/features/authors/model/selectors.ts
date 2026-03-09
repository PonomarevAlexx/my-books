import type { RootState } from "@/store/store";

export const selectAllAuthors = (state: RootState) => {
    return state.authors.authorsList;
};

export const selectStatusLoading = (state: RootState) => {
    return state.authors.status;
};

export const selectLengthAuthorsList = (state: RootState) => {
    return state.authors.length;
};

export const selectIsPagination = (state: RootState) => {
    return state.authors.isPagination;
};
