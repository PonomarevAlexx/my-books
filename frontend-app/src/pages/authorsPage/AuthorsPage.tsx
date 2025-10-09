import { Suspense, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    fetchAuthors,
    increaseLimit,
    selectLengthAuthorsLiist,
    selectLimitAuthors,
    selectSearchQueryAuthors,
} from "../../store/slices/authors-slice";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { AuthorsListLazy } from "../../components/authorsList/AuthorsList.lazy";
import { Button } from "../../components/button/Button";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimitAuthors);
    const searchQuery = useAppSelector(selectSearchQueryAuthors);
    const leanghtAuthorsList = useAppSelector(selectLengthAuthorsLiist);

    useEffect(() => {
        dispatch(fetchAuthors({ searchQuery: searchQuery, limit }));
    }, [dispatch, searchQuery, limit]);

    const handleLimit = () => {
        dispatch(increaseLimit());
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <AuthorsListLazy />
                {leanghtAuthorsList > limit && (
                    <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
                )}
            </Layout>
        </Suspense>
    );
};

export default AuthorsPage;
