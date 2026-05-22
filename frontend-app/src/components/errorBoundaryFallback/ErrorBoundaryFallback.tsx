import "./style.scss";

interface Props {
    error: Error;
}

const ErrorBoundaryFallback = ({ error }: Props) => {
    return (
        <div className="Error">
            <h2>{error.name || "Что-то пошло не так..."}</h2>
            <p>{error.message}</p>
        </div>
    );
};

export default ErrorBoundaryFallback;
