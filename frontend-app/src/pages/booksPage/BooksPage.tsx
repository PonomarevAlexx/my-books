import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    selectIsPagination,
    selectLengthBooksList,
    selectStatusLoading,
    setIsPagination,
} from "../../store/slices/books-slice";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { Button } from "../../components/button/Button";
import { increaseLimit, selectLimit } from "../../store/slices/filters-slice";
import BookList from "../../components/bookList/BookList";

const BooksPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const lengthBooksList = useAppSelector(selectLengthBooksList);
    const statusLoading = useAppSelector(selectStatusLoading);
    const isPagination = useAppSelector(selectIsPagination);

    const handleLimit = () => {
        dispatch(increaseLimit());
        dispatch(setIsPagination());
    };

    return (
        <Layout>
            {statusLoading === "loading" && !isPagination ? <PageLoader /> : <BookList />}
            {lengthBooksList > limit && statusLoading === "resolved" ? (
                <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
            ) : null}
        </Layout>
    );
};

export default BooksPage;
