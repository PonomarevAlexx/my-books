import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchBook, selectBook } from "../store/slices/book-slice";
import { useEffect } from "react";

export const BookInfoPage = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchBook(id));
        }
    }, [dispatch, id]);

    const book = useAppSelector(selectBook);
    console.log(book._id);

    return <div>Book Info Page</div>;
};
