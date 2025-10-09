import { Suspense } from "react";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { selectLengthAuthorsList } from "../../store/slices/authors-slice";
import { PageLoader } from "../../components/pageLoader/PageLoader";
import { AuthorsListLazy } from "../../components/authorsList/AuthorsList.lazy";
import { Button } from "../../components/button/Button";
import { increaseLimit, selectLimit } from "../../store/slices/filters-slice";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();
    const limit = useAppSelector(selectLimit);
    const lenghtAuthorsList = useAppSelector(selectLengthAuthorsList);

    const handleLimit = () => {
        dispatch(increaseLimit());
    };

    return (
        <Suspense fallback={<PageLoader />}>
            <Layout>
                <AuthorsListLazy />
                {lenghtAuthorsList > limit && (
                    <Button style="Button Button_center Button_mb50" text="Показать больше" handler={handleLimit} />
                )}
            </Layout>
        </Suspense>
    );
};

export default AuthorsPage;
