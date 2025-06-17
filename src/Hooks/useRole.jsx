import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
const useRole = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const email = user?.email;
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (!email) return;
    const fetchRole =async () => {
    try {
      const response =await axiosSecure.get(`users/${email}`);
      // console.log(response);
      
      setRole(response?.data?.role);
    } catch (error) {
      console.error("Failed to fetch user role:", error);
    }
    }
    fetchRole()
  }, [email, axiosSecure]);
  return { role };
};

export default useRole;
