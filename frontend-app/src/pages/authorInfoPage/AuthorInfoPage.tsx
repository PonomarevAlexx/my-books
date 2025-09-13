import { useEffect } from "react";
import AuthorInfo from "../../components/authorInfo/AuthorInfo";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams } from "react-router";
import { fetchAuthor, selectAuthor, selectStatus } from "../../store/slices/author-slice";
import type { Author } from "../../types/types";
import { PageLoader } from "../../components/pageLoader/PageLoader";

const AuthorPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchAuthor(id));
        }
    }, [dispatch, id]);

    const author = useAppSelector(selectAuthor);
    const status = useAppSelector(selectStatus);

    const isAuthor = (author: Author | null): author is Author => {
        return author !== null;
    };

    return (
        <>
            <Layout>
                {status === "resolved" && isAuthor(author) ? <AuthorInfo author={author} /> : <PageLoader />}
            </Layout>
        </>
    );
};

export default AuthorPage;
