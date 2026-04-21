import { redirect } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";

export const cleanQueryLoader = ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);

    if (url.search) {
        return redirect(url.pathname);
    }

    return null;
};
