import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectIsPagination, selectLengthAuthorsList, selectStatusLoading } from "@/features/authors/model/selectors";
import { setIsPagination } from "@/features/authors/model/authorsSlice";
import { PageLoader } from "@/components/pageLoader/PageLoader";
import { Button } from "../../components/button/Button";
import AuthorsList from "../../components/authorsList/AuthorsList";
import { Select } from "@/components/select/Select";
import { useQueryFilteres } from "@/hooks/useQueryFilteres";
import { useEffect } from "react";
import { fetchAuthors } from "@/features/authors/model/authorsThunk";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();
    const lenghtAuthorsList = useAppSelector(selectLengthAuthorsList);
    const statusLoading = useAppSelector(selectStatusLoading);
    const isPagination = useAppSelector(selectIsPagination);
    const { nextPage, page, limit, search } = useQueryFilteres();
    const recordLimit = page * limit;

    useEffect(() => {
        dispatch(fetchAuthors({ searchQuery: search, limit, page }));
    }, [dispatch, limit, search, page]);

    const handleLimit = () => {
        nextPage();
        dispatch(setIsPagination());
    };

    return (
        <Layout>
            {statusLoading === "loading" && !isPagination ? <PageLoader /> : <AuthorsList />}

            {lenghtAuthorsList > 0 ? (
                <>
                    <Button
                        disabled={lenghtAuthorsList < recordLimit ? true : false}
                        style="Button Button_center Button_mb50"
                        text="Показать больше"
                        handler={handleLimit}
                    />
                    <Select />
                </>
            ) : null}
        </Layout>
    );
};

export default AuthorsPage;
