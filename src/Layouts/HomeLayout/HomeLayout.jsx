import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import Dashnav from "../../Components/Dashnav"
import HealthcareNavbar from "../../Components/Navbar"

const HomeLayout = () => {
    return(
        <div className="bg-[#FFF9F5]">
           <HealthcareNavbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}
export default HomeLayout