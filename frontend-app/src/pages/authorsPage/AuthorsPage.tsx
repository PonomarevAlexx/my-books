import { Suspense, useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchAuthors } from "../../store/slices/authors-slice";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { AuthorsListLazy } from "../../components/authorsList/AuthorsList.lazy";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAuthors());
    }, [dispatch]);

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <AuthorsListLazy />
            </Layout>
        </Suspense>
    );
};

export default AuthorsPage;
