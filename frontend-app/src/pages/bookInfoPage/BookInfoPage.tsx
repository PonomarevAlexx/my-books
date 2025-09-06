import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBook, selectBook } from "../../store/slices/book-slice";
import { Suspense, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { BookInfoLazy } from "../../components/bookInfo/BookInfo.lazy";

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
            <Suspense fallback={<PageLoader />}>
                <Layout>
                    <BookInfoLazy book={book} />
                </Layout>
            </Suspense>
        </>
    );
};

export default BookInfoPage;
