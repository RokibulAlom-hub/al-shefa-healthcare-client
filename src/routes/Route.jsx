import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/error-page";
import Home from "../Pages/Homepages/Home";
import Appoinment from "../Pages/DashboardPages/Doctor/Appoinment";
import Alluser from "../Pages/DashboardPages/Admin/Alluser";
import Myhistory from "../Pages/DashboardPages/patients/Myhistory";

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
        path:"/dash",
        element:<Privateroute>
            <Dashboard></Dashboard>
        </Privateroute>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/dash/doctor",
                element:<Appoinment></Appoinment>
            },
            {
                path:"/dash/admin",
                element:<Alluser></Alluser>
            },
            {
                path:"/dash/patient",
                element:<Myhistory></Myhistory>
            },
        ]
    }  
    
])