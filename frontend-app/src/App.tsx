import { Suspense, useEffect, useRef } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet } from "react-router-dom";
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
import ErrorBoundary from "./components/errorBoundary/ErrorBoundary";
import ErrorBoundaryFallback from "./components/errorBoundaryFallback/ErrorBoundaryFallback";
import { ErrorPageLazy } from "./pages/errorPage/ErrorPage.lazy";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<MainLayout />}>
            <Route
                element={
                    <Suspense fallback={<PageLoader />}>
                        <Outlet />
                    </Suspense>
                }
                errorElement={<ErrorPageLazy />}
            >
                <Route path={"/books"} element={<BooksPageLazy />} />
                <Route path={"/authors"} element={<AuthorsPageLazy />} />
                <Route loader={cleanQueryLoader}>
                    <Route path={"/book/:id"} element={<BookInfoPageLazy />} />
                    <Route path={"/author/:id"} element={<AuthorPageLazy />} />
                    <Route path={"/login"} element={<LoginPageLazy />} />
                </Route>
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
        <ErrorBoundary fallback={ErrorBoundaryFallback}>
            <RouterProvider router={router} />
        </ErrorBoundary>
    );
}

export default App;
