import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBook, selectBook } from "../../store/slices/book-slice";
import { useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import BookInfo from "../../components/bookInfo/BookInfo";

const BookInfoPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchBook(id));
        }
    }, [dispatch, id]);

    const book = useAppSelector(selectBook);

    return (
        <>
            <Layout>{book ? <BookInfo book={book} /> : <PageLoader />}</Layout>
        </>
    );
};

export default BookInfoPage;
