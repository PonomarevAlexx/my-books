import { useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { fetchBooks } from "../store/slices/books-slice";
import { BookList } from "../components/bookList/BookList";

export const BooksPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return <BookList />;
};
