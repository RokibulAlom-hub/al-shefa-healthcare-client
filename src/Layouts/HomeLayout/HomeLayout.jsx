import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import Dashnav from "../../Components/Dashnav"

const HomeLayout = () => {
    return(
        <div className="bg-[#FFF9F5]">
           <Dashnav/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    )
}
export default HomeLayout