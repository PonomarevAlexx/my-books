import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { fetchBooks } from "./store/slices/books-slice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return <>Hello</>;
}

export default App;
