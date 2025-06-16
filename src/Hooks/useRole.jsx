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
    try {
      const response = axiosSecure.get(`users/${email}`);
      setRole(response?.data?.role);
    } catch (error) {
      console.error("Failed to fetch user role:", error);
    }
  }, [email, axiosSecure]);
  return { role };
};

export default useRole;
