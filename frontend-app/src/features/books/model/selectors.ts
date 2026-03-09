import type { RootState } from "@/store/store";

export const selectAllBooks = (state: RootState) => {
    return state.books.bookList;
};

export const selectStatusLoading = (state: RootState) => {
    return state.books.status;
};

export const selectLengthBooksList = (state: RootState) => {
    return state.books.length;
};

export const selectIsPagination = (state: RootState) => {
    return state.books.isPagination;
};
