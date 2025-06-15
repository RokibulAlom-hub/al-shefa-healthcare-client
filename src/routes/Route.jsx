import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Error/error-page";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Homepages/Home";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import Dashboard from "../Layouts/Dashboard/Dashboard";

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
        ]
    },
    //dashboard layout
    {
        path:"/dashboard",
        element:<Privateroute>
            <Dashboard></Dashboard>
        </Privateroute>,
        errorElement:<ErrorPage></ErrorPage>,
    }  
    
])