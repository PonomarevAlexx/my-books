import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBooks, selectStatusLoading } from "../../store/slices/books-slice";
import { BookList } from "../../components/bookList/BookList";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";

const BooksPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const status = useAppSelector(selectStatusLoading);

    return (
        <>
            <Layout>{status === "loading" ? <PageLoader /> : <BookList />}</Layout>
        </>
    );
};

export default BooksPage;
