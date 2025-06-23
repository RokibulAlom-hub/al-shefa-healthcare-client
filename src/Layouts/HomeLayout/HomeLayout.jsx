import { Outlet } from "react-router-dom"
import HealthcareNavbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

const HomeLayout = () => {
    return(
        <div>
            <HealthcareNavbar></HealthcareNavbar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}
export default HomeLayout