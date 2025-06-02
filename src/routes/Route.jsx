import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/error-page";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Homepages/Home";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import DemoForRoute from "../Homepages/DemoForRoute";

export const router = createBrowserRouter([
    // homelayout pages and components
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<RegisterPage></RegisterPage>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
            {
                path:'/demo',
                element:<Privateroute>
                    <DemoForRoute></DemoForRoute>
                </Privateroute>
            }
        ]
    }
])