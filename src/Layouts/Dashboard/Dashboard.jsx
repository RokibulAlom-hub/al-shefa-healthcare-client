import { useEffect } from 'react';
import Dashnav from '../../Components/Dashnav';
import useRole from '../../Hooks/useRole';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer';

const Dashboard = () => {
    const {role} = useRole();
    const navigate = useNavigate()
    console.log(role);
    useEffect(() => {
    if (role === "doctor") {
      navigate("/dash/doctorAppoinments");
    }
    if (role === "admin") {
      navigate("/dash/admin");
    }
    if (role === "patient") {
      navigate("/dash/patient");
    }
  }, [role, navigate]);
    return (
        <div>
            <Dashnav></Dashnav>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Dashboard;