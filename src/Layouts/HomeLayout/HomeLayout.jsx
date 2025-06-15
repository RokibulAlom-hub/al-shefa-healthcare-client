import { Outlet } from "react-router-dom"
import HealthcareNavbar from "../../Components/Navbar"

const HomeLayout = () => {
    return(
        <div>
            <HealthcareNavbar></HealthcareNavbar>
            <Outlet></Outlet>
        </div>
    )
}
export default HomeLayout