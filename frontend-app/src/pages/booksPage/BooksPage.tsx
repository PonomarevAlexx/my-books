import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setIsPagination } from "../../features/books/model/booksSlice";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { Button } from "../../components/button/Button";
import { ButtonLayout } from "@/components/buttonLayout/ButtonLayout";
import BookList from "../../components/bookList/BookList";
import { Select } from "@/components/select/Select";
import {
    selectAllBooks,
    selectErrorBooks,
    selectIsPagination,
    selectLengthBooksList,
    selectStatusLoading,
} from "@/features/books/model/selectors";
import { useQueryFilteres } from "@/hooks/useQueryFilteres";
import { useEffect } from "react";
import { fetchBooks } from "@/features/books/model/booksThunks";

const BooksPage = () => {
    const dispatch = useAppDispatch();
    const lengthBooksList = useAppSelector(selectLengthBooksList);
    const status = useAppSelector(selectStatusLoading);
    const isPagination = useAppSelector(selectIsPagination);
    const error = useAppSelector(selectErrorBooks);
    const bookList = useAppSelector(selectAllBooks);

    const { limit, search, page, nextPage } = useQueryFilteres();
    const recordLimit = page * limit;

    useEffect(() => {
        dispatch(fetchBooks({ searchQuery: search, limit, page }));
    }, [dispatch, limit, search, page]);

    const handleLimit = () => {
        nextPage();
        dispatch(setIsPagination());
    };

    if (status === "rejected") throw new Error(error);

    return (
        <>
            {status === "loading" && !isPagination ? <PageLoader /> : <BookList bookList={bookList} />}
            {lengthBooksList > 0 && status !== "loading" ? (
                <>
                    <ButtonLayout className="ButtonLayout_center ButtonLayout_mb50">
                        <Button
                            variant="light"
                            disabled={lengthBooksList < recordLimit ? true : false}
                            text="Показать больше"
                            onClick={handleLimit}
                        />
                    </ButtonLayout>
                    <Select />
                </>
            ) : null}
        </>
    );
};

export default BooksPage;
