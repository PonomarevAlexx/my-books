import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchBook, selectBook } from "../store/slices/book-slice";
import { useEffect } from "react";
import { BookInfo } from "../components/bookInfo/BookInfo";
import { Header } from "../components/header/Header";
import { Layout } from "../components/layout/Layout";
import { Footer } from "../components/footer/Footer";
import { selectStatusLoading } from "../store/slices/book-slice";
import { PageLoader } from "../components/pageLoader/PageLoader";

export const BookInfoPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchBook(id));
        }
    }, [dispatch, id]);

    const book = useAppSelector(selectBook);
    const status = useAppSelector(selectStatusLoading);

    return (
        <>
            <Header />
            <Layout>{status === "loading" ? <PageLoader /> : <BookInfo book={book} />}</Layout>
            <Footer />
        </>
    );
};
