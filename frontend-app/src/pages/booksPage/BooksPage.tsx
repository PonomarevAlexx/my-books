import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setIsPagination } from "../../features/books/model/booksSlice";
import { Layout } from "../../components/layout/Layout";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { Button } from "../../components/button/Button";
import { increaseLimit } from "@/features/filters/model/filtersSlice";
import { selectLimit } from "@/features/filters/model/selectors";
import BookList from "../../components/bookList/BookList";
import { Select } from "@/components/select/Select";
import {
    selectAllBooks,
    selectIsPagination,
    selectLengthBooksList,
    selectStatusLoading,
} from "@/features/books/model/selectors";

const BooksPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const lengthBooksList = useAppSelector(selectLengthBooksList);
    const statusLoading = useAppSelector(selectStatusLoading);
    const isPagination = useAppSelector(selectIsPagination);
    const bookList = useAppSelector(selectAllBooks);

    const handleLimit = () => {
        dispatch(increaseLimit());
        dispatch(setIsPagination());
    };

    return (
        <Layout>
            {statusLoading === "loading" && !isPagination ? <PageLoader /> : <BookList bookList={bookList} />}
            {lengthBooksList > limit ? (
                <>
                    <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
                    <Select />
                </>
            ) : null}
        </Layout>
    );
};

export default BooksPage;
