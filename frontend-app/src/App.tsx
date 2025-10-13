import { Suspense } from "react";
import { Routes, Route } from "react-router";
import { BooksPageLazy } from "./pages/booksPage/BooksPage.lazy";
import { BookInfoPageLazy } from "./pages/bookInfoPage/BookInfoPage.lazy";
import { PageLoader } from "./components/pageLoader/PageLoader";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AuthorsPageLazy } from "./pages/authorsPage/AuthorsPage.lazy";
import { AuthorPageLazy } from "./pages/authorInfoPage/AuthorInfoPage.lazy";
import { ScrollToTopButton } from "./components/scrollToTopButton/ScrollToTopButton";

function App() {
    return (
        <>
            <Header />
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path={"/books"} element={<BooksPageLazy />} />
                    <Route path={"/book/:id"} element={<BookInfoPageLazy />} />
                    <Route path={"/authors"} element={<AuthorsPageLazy />} />
                    <Route path={"/author/:id"} element={<AuthorPageLazy />} />
                </Routes>
            </Suspense>
            <ScrollToTopButton />
            <Footer />
        </>
    );
}

export default App;
