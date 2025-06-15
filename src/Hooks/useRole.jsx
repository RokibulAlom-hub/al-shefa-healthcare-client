import { useEffect, useState } from "react";
import useAuth from "./useAuth";
const useRole = () => {
  const { user } = useAuth();
  const email = user?.email;
  const [role,setRole] = useState(null)
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:7000/users/${email}`)
        .then((res) => res.json())
        .then((data) => 
            setRole(data?.role)
        )
        .catch((error) => {
          console.error("Failed to fetch user role:", error);
        });
    }
  }, [email]);
  return {role}
};

export default useRole;
