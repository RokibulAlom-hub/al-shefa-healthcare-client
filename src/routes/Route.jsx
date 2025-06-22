import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/error-page";
import Home from "../Pages/Homepages/Home";
import CreateProfile from "../Pages/DashboardPages/Admin/CreateProfile";
import Doctors from "../Pages/DashboardPages/Admin/Doctors/Doctors";
import Pharamacist from "../Pages/DashboardPages/Admin/Pharmacists/Pharmacist";
import Appoinment from "../Pages/DashboardPages/Admin/Appoinments/Appoinment";
import Orders from "../Pages/DashboardPages/Admin/Orders/Orders";
import Alluser from "../Pages/DashboardPages/Admin/Alluser/Alluser";
import DoctorAppoinmentList from "../Pages/DashboardPages/Doctor/DoctorAppoinmentList";
import Dprofile from "../Pages/DashboardPages/Doctor/Dprofile";
import CurrentAppoinments from "../Pages/DashboardPages/Doctor/CurrentAppoinments";

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
                path:"/dash/orders",
                element:<Orders></Orders>
            },
            {
                path:"/dash/admin",
                element:<Alluser></Alluser>
            },
            //from here doctors route has been started
            {
                path:"/dash/doctorAppoinments",
                element:<DoctorAppoinmentList/>
            },
            {
                path:"/dash/appointmentRecord",
                element:<CurrentAppoinments></CurrentAppoinments>
            },
            {
                path:"/dash/dProfile",
                element:<Dprofile/>
            }
        ]
    }  
    
])