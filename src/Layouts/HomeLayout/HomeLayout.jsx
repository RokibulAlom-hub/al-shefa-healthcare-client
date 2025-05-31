import { Outlet } from "react-router-dom"
import HealthcareNavbar from "../../Components/Navbar"
import Home from "../../Homepages/Home"

const HomeLayout = () => {
    return(
        <div>
            <HealthcareNavbar></HealthcareNavbar>
            <Outlet></Outlet>
        </div>
    )
}
export default HomeLayout