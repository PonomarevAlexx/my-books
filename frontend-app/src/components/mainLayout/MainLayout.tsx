import "./style.scss";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { ScrollToTopButton } from "../scrollToTopButton/ScrollToTopButton";

export const MainLayout: React.FC = () => {
    return (
        <>
            <Header />
            <main className="MainLayout">
                <Outlet />
            </main>
            <ScrollToTopButton />
            <Footer />
        </>
    );
};
