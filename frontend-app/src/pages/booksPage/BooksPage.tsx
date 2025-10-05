import { Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { fetchBooks, selectLengthBooksList, selectSearchQuery } from "../../store/slices/books-slice";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { BookListLazy } from "../../components/bookList/BookList.lazy";
import { increaseLimit, selectLimit } from "../../store/slices/books-slice";
import { Button } from "../../components/button/Button";

const BooksPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const searchQuery = useAppSelector(selectSearchQuery);
    const lengthBooksList = useAppSelector(selectLengthBooksList);

    useEffect(() => {
        dispatch(fetchBooks({ serchQuery: searchQuery, limit }));
    }, [dispatch, searchQuery, limit]);

    const handleLimit = () => {
        dispatch(increaseLimit());
    };

    return (
        <>
            <Suspense fallback={<PageLoader />}>
                <Layout>
                    <BookListLazy />
                    {lengthBooksList > limit && (
                        <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
                    )}
                </Layout>
            </Suspense>
        </>
    );
};

export default BooksPage;
