import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { BooksPageLazy } from "./pages/booksPage/BooksPage.lazy";
import { BookInfoPageLazy } from "./pages/bookInfoPage/BookInfoPage.lazy";
import { PageLoader } from "./components/pageLoader/PageLoader";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AuthorsPageLazy } from "./pages/authorsPage/AuthorsPage.lazy";

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path={"/books"} element={<BooksPageLazy />} />
                    <Route path={"/books/:id"} element={<BookInfoPageLazy />} />
                    <Route path={"/authors"} element={<AuthorsPageLazy />} />
                </Routes>
            </Suspense>
            <Footer />
        </>
    );
}

export default App;
