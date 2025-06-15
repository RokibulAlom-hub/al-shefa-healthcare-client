// this is firebase authprovder page
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";
// creating authcontext for global access
export const Authcontext = createContext(null);
const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  //create user
  const createUserbyMail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login by email password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
    const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //    console.log('observer is watching you', currentUser);
      //settings jwt web token
      if (currentUser?.email) {
        const jwtUser = { email: currentUser?.email };
        fetch("http://localhost:7000/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // This is how you include cookies
          body: JSON.stringify(jwtUser),
        })
          .then((res) => res.json())
           // Convert the response to JSON
          .then((data) => {
            console.log(data); // This is where your response data is
          });
          
          
      }
      setLoading(false);
    });
    return () => {
      unsubscriber();
    };
  }, []);
  const authdata = {
    user,
    googleLogin,
    createUserbyMail,
    userLogin,
    logout,
    loading,
  };
  return (
    <Authcontext.Provider value={authdata}>{children}</Authcontext.Provider>
  );
};
export default Authprovider;
