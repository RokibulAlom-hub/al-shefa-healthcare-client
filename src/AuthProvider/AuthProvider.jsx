// this is firebase authprovder page
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
// creating authcontext for global access
export const Authcontext = createContext(null);
const Authprovider = ({ children }) => {
    const [user,setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();

  //create user
  const createUserbyMail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //    google Login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //sign out function
  const logout = () => {
    return signOut(auth);
  };
  //observer settings
  useEffect(() => {
    const unsubscriber = onAuthStateChanged(auth,(currentUser) =>{
       setUser(currentUser)
    //    console.log('observer is watching you', currentUser);
       
    })
    return () => {
        unsubscriber()
    }
  },[])
  const authdata = {
    user,
    googleLogin,
    createUserbyMail,
    logout,
  };
  return (
    <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>
  );
};
export default Authprovider;
