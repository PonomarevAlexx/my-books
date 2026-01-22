import { Loader } from "../loader/Loader";
import "./style.scss";

export const PageLoader: React.FC = () => {
    return (
        <div className="PageLoader">
            <Loader />
        </div>
    );
};
