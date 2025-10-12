import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectIsPagination, selectLengthAuthorsList, selectStatusLoading, setIsPagination } from "../../store/slices/authors-slice";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { Button } from "../../components/button/Button";
import { increaseLimit, selectLimit } from "../../store/slices/filters-slice";
import AuthorsList from "../../components/authorsList/AuthorsList";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const lenghtAuthorsList = useAppSelector(selectLengthAuthorsList);
    const statusLoading = useAppSelector(selectStatusLoading);
    const isPagination = useAppSelector(selectIsPagination)

    const handleLimit = () => {
        dispatch(increaseLimit());
        dispatch(setIsPagination())
    };

    return (
        <Layout>
            {statusLoading === "loading" && !isPagination ? <PageLoader /> : <AuthorsList />}

            {lenghtAuthorsList > limit && statusLoading === "resolved" ? (
                <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
            ) : null}
        </Layout>
    );
};

export default AuthorsPage;
