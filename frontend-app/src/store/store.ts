import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./slices/books-slice";
import { bookReducer } from "./slices/book-slice";
import { authorsReducer } from "./slices/authors-slice";
import { authorReducer } from "./slices/author-slice";
import { filteresReducer } from "./slices/filters-slice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer,
        authors: authorsReducer,
        author: authorReducer,
        filteres: filteresReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
