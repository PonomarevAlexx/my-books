import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectBook, selectStatusLoading } from "@/features/book/model/selectors";
import { fetchBook } from "@/features/book/model/bookThunks";
import { useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import BookInfo from "../../components/bookInfo/BookInfo";
import type { Book } from "../../features/book/model/types";

const BookInfoPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchBook({ id }));
        }
    }, [dispatch, id]);

    const book = useAppSelector(selectBook);
    const status = useAppSelector(selectStatusLoading);

    const isBook = (book: Book | null): book is Book => {
        return book !== null;
    };

    return (
        <>
            <Layout>{status === "resolved" && isBook(book) ? <BookInfo book={book} /> : <PageLoader />}</Layout>
        </>
    );
};

export default BookInfoPage;
