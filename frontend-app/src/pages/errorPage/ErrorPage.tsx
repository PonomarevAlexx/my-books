import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.error(error);

    if (isRouteErrorResponse(error)) {
        return (
            <>
                <h1>
                    {error.status} {error.statusText}
                </h1>
                <p>{error.data}</p>
            </>
        );
    } else if (error instanceof Error) {
        return (
            <>
                <h1>Ошибка: {error.message}</h1>
                <p>Попробуйте вернуться позже</p>
            </>
        );
    } else {
        return <h1>Неизвестная ошибка...</h1>;
    }
};

export default ErrorPage;
