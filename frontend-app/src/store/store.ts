import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "../features/books/model/booksSlice";
import { bookReducer } from "../features/book/model/bookSlice";
import { authorsReducer } from "../features/authors/model/authorsSlice";
import { authorReducer } from "@/features/author/model/authorSlice";
import { userReducer } from "@/features/user/model/userSlice";

export const store = configureStore({
    reducer: {
        books: booksReducer,
        book: bookReducer,
        authors: authorsReducer,
        author: authorReducer,
        user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// При переходе со страницы книг лимит на авторах не сбрасывается на 20
