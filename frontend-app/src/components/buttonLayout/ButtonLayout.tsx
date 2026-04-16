import type { ReactNode } from "react";
import "./style.scss";

interface ButtonLayoutProps {
    className?: string;
    children: ReactNode;
}

export const ButtonLayout: React.FC<ButtonLayoutProps> = ({ className, children }) => {
    return <div className={` ButtonLayout ${className}`}>{children}</div>;
};
