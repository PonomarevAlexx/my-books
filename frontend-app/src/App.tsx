import { Suspense, useEffect, useRef } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { BooksPageLazy } from "./pages/booksPage/BooksPage.lazy";
import { BookInfoPageLazy } from "./pages/bookInfoPage/BookInfoPage.lazy";
import { PageLoader } from "./components/pageLoader/PageLoader";
import { AuthorsPageLazy } from "./pages/authorsPage/AuthorsPage.lazy";
import { AuthorPageLazy } from "./pages/authorInfoPage/AuthorInfoPage.lazy";
import { LoginPageLazy } from "./pages/loginPage/LoginPage.lazy";
import { checkAuthThunk } from "./features/user/model/userThunks";
import { useAppDispatch } from "./hooks/hooks";
import { MainLayout } from "./components/mainLayout/MainLayout";
import { cleanQueryLoader } from "./shared/loaders/cleanQueryLoader";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route path={"/books"} element={<BooksPageLazy />} />
            <Route path={"/authors"} element={<AuthorsPageLazy />} />
            <Route loader={cleanQueryLoader}>
                <Route path={"/book/:id"} element={<BookInfoPageLazy />} />
                <Route path={"/author/:id"} element={<AuthorPageLazy />} />
                <Route path={"/login"} element={<LoginPageLazy />} />
            </Route>
        </Route>,
    ),
);

function App() {
    const dispatch = useAppDispatch();
    const hasChecked = useRef(false);

    useEffect(() => {
        if (!hasChecked.current && localStorage.getItem("token")) {
            dispatch(checkAuthThunk());
            hasChecked.current = true;
        }
    }, [dispatch]);

    return (
        <Suspense fallback={<PageLoader />}>
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
