import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/books-slice";
import { bookReducer } from "./slices/book-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
