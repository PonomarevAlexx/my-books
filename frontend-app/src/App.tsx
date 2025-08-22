import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchBooks } from "./store/slices/books-slice";
import { BookList } from "./components/bookList/BookList";
import { BrowserRouter } from "react-router";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <>
            <BrowserRouter>
                <BookList />
            </BrowserRouter>
        </>
    );
}

export default App;
