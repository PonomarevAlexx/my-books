import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchBooks, selectStatusLoading } from "../store/slices/books-slice";
import { BookList } from "../components/bookList/BookList";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { Footer } from "../components/footer/Footer";
import { PageLoader } from "../components/pageLoader/PageLoader";

export const BooksPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    const status = useAppSelector(selectStatusLoading);

    return (
        <>
            <Header />
            <Layout>{status === "loading" ? <PageLoader /> : <BookList />}</Layout>
            <Footer />
        </>
    );
};
