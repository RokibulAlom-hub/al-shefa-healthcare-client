import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/error-page";
import Home from "../Pages/Homepages/Home";
import Alluser from "../Pages/DashboardPages/Admin/Alluser";
import CreateProfile from "../Pages/DashboardPages/Admin/CreateProfile";
import Doctors from "../Pages/DashboardPages/Admin/Doctors";
import Pharamacist from "../Pages/DashboardPages/Admin/Pharmacist";
import Appoinment from "../Pages/DashboardPages/Admin/Appoinment";

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
                path:"/dash/createProfile",
                element:<CreateProfile></CreateProfile>
            },
            {
                path:"/dash/doctors",
                element:<Doctors></Doctors>
            },
            {
                path:"/dash/pharmacists",
                element:<Pharamacist></Pharamacist>
            },
            {
                path:"/dash/appoinments",
                element:<Appoinment></Appoinment>
            },
            {
                path:"/dash/admin",
                element:<Alluser></Alluser>
            },
            
        ]
    }  
    
])