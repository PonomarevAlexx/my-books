import { Loader } from "../loader/Loader";
import "./style.css";

export const PageLoader: React.FC = () => {
    return (
        <div className="PageLoader">
            <Loader />
        </div>
    );
};
