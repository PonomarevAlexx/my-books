import type { RootState } from "@/store/store";

export const selectBook = (state: RootState) => {
    return state.book.book;
};

export const selectStatusLoading = (state: RootState) => {
    return state.book.status;
};

export const selectErrorBook = (state: RootState) => {
    return state.book.error;
}
