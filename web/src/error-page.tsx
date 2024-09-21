import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    const message = error.statusText ? `${error.status} - ${error.statusText}` : error.message

    return (
        <div id="error-page" className="h-screen flex justify-center items-center">
            <div className=" text-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{message}</i>
                </p>
            </div>
        </div>
    );
}