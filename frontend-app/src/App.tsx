import { BooksPage } from "./pages/BooksPage";
import { BookInfoPage } from "./pages/BookInfoPage";
import { Routes, Route } from "react-router";
import { Header } from "./components/header/Header";
import { Layout } from "./components/layout/Layout";

function App() {
    return (
        <>
            <Header />
            <Layout>
                <Routes>
                    <Route path={"/books"} element={<BooksPage />} />
                    <Route path={"/books/:id"} element={<BookInfoPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
