import React, { useContext, useEffect, useState } from "react";
import '../Firebase/firebase'
import { GoogleAuthProvider,getAuth,signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthContext = React.createContext({});
const auth=getAuth()

const useAuth=()=>{
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser]=useState();
  const login = (callbacks=()=>{}) => {
    console.log("login using Google Api...");
    signInWithPopup(auth,provider).then((response)=>callbacks(response));   
  };

  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user)=>{
      console.log("onAuthStateChanged..")
      setUser(user);
    })

    return ()=>{
      unsubscribe();
    }
  },[])
  const logout = () => {
    console.log("logout successfully...");
    signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ login, logout , user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
