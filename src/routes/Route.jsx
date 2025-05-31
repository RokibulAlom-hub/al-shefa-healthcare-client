import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/error-page";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";

export const router = createBrowserRouter([
    // homelayout pages and components
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>
    }
])