import { useEffect } from "react";
import AuthorInfo from "../../components/authorInfo/AuthorInfo";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useParams } from "react-router";
import { fetchAuthor } from "@/features/author/model/authorThunk";
import { selectAuthor, selectErrrorAuthor, selectStatus } from "@/features/author/model/selectors";
import type { Author } from "@/features/author/model/types";
import { PageLoader } from "../../components/pageLoader/PageLoader";

const AuthorPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchAuthor({ id }));
        }
    }, [dispatch, id]);

    const author = useAppSelector(selectAuthor);
    const status = useAppSelector(selectStatus);
    const error = useAppSelector(selectErrrorAuthor);

    const isAuthor = (author: Author | null): author is Author => {
        return author !== null;
    };

    if (status === "rejected") throw new Error(error);

    if (status === "loading") return <PageLoader />;

    if (status === "resolved" && isAuthor(author)) return <AuthorInfo author={author} />;
};

export default AuthorPage;
