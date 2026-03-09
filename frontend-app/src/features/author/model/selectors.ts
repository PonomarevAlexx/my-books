import type { RootState } from "@/store/store";

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
