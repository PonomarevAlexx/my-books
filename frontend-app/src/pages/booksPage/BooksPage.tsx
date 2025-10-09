import { Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectLengthBooksList } from "../../store/slices/books-slice";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { BookListLazy } from "../../components/bookList/BookList.lazy";
import { Button } from "../../components/button/Button";
import { increaseLimit, selectLimit } from "../../store/slices/filters-slice";

const BooksPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const lengthBooksList = useAppSelector(selectLengthBooksList);

    const handleLimit = () => {
        dispatch(increaseLimit());
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <BookListLazy />
                {lengthBooksList > limit && (
                    <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
                )}
            </Layout>
        </Suspense>
    );
};

export default BooksPage;
