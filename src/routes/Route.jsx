import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import RegisterPage from "../AuthFiles/Register";
import LoginPage from "../AuthFiles/Login";
import Privateroute from "./Privateroute";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import ErrorPage from "../Pages/Error/error-page";
import Home from "../Pages/LandingPages/Home.jsx";
import CreateProfile from "../Pages/DashboardPages/Admin/CreateProfile";
import Doctors from "../Pages/DashboardPages/Admin/Doctors/Doctors";
import Pharamacist from "../Pages/DashboardPages/Admin/Pharmacists/Pharmacist";
import Appoinment from "../Pages/DashboardPages/Admin/Appoinments/Appoinment";
import Orders from "../Pages/DashboardPages/Admin/Orders/Orders";
import Alluser from "../Pages/DashboardPages/Admin/Alluser/Alluser";
import DoctorAppoinmentList from "../Pages/DashboardPages/Doctor/DoctorAppoinmentList";
import Dprofile from "../Pages/DashboardPages/Doctor/Dprofile";
import CurrentAppoinments from "../Pages/DashboardPages/Doctor/CurrentAppoinments";
import Addmedicine from "../Pages/DashboardPages/Pharmasicts/Addmedicine";
import MedicineList from "../Pages/DashboardPages/Pharmasicts/MedicineList";
import MyAppoinment from "../Pages/DashboardPages/patients/MyAppoinment.jsx";
import Myorders from "../Pages/DashboardPages/patients/Myorders.jsx";
import AllDoctorsToShow from "../Pages/HomeLayoutPages/Showdoctors/AllDoctorsToShow.jsx";
import AppointmentBooking from "../Pages/HomeLayoutPages/Appoinments/AppointmentBooking.jsx";
import MedicineStore from "../Pages/HomeLayoutPages/ShowMedicines/MedicineStore.jsx";
import About from "../Pages/HomeLayoutPages/About.jsx";

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
             //from here homelayout pages has been started
            {
                path:"/ourDoctors",
                element:<AllDoctorsToShow/>
            },
            {
                path:"/medicinestore",
                element:<MedicineStore/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/appoinment/:_id",
                element:<Privateroute>
                    <AppointmentBooking/>
                </Privateroute>
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
                element:<CurrentAppoinments/>
            },
            {
                path:"/dash/dProfile",
                element:<Dprofile/>
            },
            //from here pharmasicts route has been started
            {
                path:"/dash/addmedicine",
                element:<Addmedicine/>
            },
            {
                path:"/dash/medicine",
                element:<MedicineList/>
            }
            // from here patiens route has been started
            ,
            {
                path:"/dash/patient",
                element:<MyAppoinment/>
            },
            {
                path:"/dash/myorders",
                element:<Myorders></Myorders>
            },
        ]
    }  
    
])