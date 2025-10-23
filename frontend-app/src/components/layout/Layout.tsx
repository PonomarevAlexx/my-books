import type { ReactNode } from "react";
import "./style.scss";

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className="Layout">{children}</div>;
};
