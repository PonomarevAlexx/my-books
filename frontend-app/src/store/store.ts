import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/books-slice";
import { bookReducer } from "./slices/book-slice";
import { authorsReducer } from "./slices/authors-slice";
import { authorReducer } from "./slices/author-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer,
        authors: authorsReducer,
        author: authorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
