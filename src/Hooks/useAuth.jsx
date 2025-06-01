import { useContext } from "react";
import { Authcontext } from "../AuthProvider/AuthProvider";


const useAuth = () => {
    const auth = useContext(Authcontext)
    return auth
};

export default useAuth;