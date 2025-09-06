import { Suspense, useEffect } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchBooks } from "../../store/slices/books-slice";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { BookListLazy } from "../../components/bookList/BookList.lazy";

const BooksPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <>
            <Suspense fallback={<PageLoader />}>
                <Layout>
                    <BookListLazy />
                </Layout>
            </Suspense>
        </>
    );
};

export default BooksPage;
