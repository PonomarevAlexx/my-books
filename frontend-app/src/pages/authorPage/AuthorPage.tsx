import { useEffect } from "react";
import AuthorInfo from "../../components/authorInfo/AuthorInfo";
import { Layout } from "../../components/layout/Layout";
import { useAppDispatch } from "../../hooks/hooks";
import { useParams } from "react-router";
import { fetchAuthor } from "../../store/slices/author-slice";

const AuthorPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchAuthor(id));
        }
    });

    return (
        <>
            <Layout>
                <AuthorInfo />
            </Layout>
        </>
    );
};

export default AuthorPage;
