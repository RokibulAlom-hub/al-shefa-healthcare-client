import { createContext } from "react";

export const Authcontext = createContext(null);
const Authprovider = ({children}) =>{
    const authdata = {
        name:"rokib",
    }
   return(
    <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>
   )
}
export default Authprovider