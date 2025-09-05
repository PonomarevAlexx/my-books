import { BooksPage } from "./pages/BooksPage";
import { BookInfoPage } from "./pages/BookInfoPage";
import { Routes, Route } from "react-router";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/books"} element={<BooksPage />} />
                <Route path={"/books/:id"} element={<BookInfoPage />} />
            </Routes>
        </>
    );
}

export default App;
