import { useEffect } from "react";
import AuthorsList from "../../components/authorsList/AuthorsList";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch } from "../../hooks/hooks";
import { fetchAuthors } from "../../store/slices/authors-slice";

const AuthorsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAuthors());
    });

    return (
        <Layout>
            <AuthorsList />
        </Layout>
    );
};

export default AuthorsPage;
