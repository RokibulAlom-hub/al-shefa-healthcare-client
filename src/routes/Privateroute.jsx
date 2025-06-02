import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    const {user,loading} = useAuth();
    const navigate = useNavigate()
   useEffect(() => {
     if (!loading && !user) {
        navigate('/login')
     }
   },[loading,user,navigate])
   if (loading) {
    return <div>Loading please wait for a minute </div>
   }
   return children ? user : null ;
};

export default Privateroute;