// this is firebase authprovder page 
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import {auth} from "../Firebase/Firebase.init";
// creating authcontext for global access
export const Authcontext = createContext(null);
const Authprovider = ({children}) =>{
   const googleProvider = new GoogleAuthProvider();
   const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
   }
    const authdata = {
        name:"rokib",
        googleLogin
    }
   return(
    <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>
   )
}
export default Authprovider