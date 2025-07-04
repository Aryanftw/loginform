import { createContext, useContext, useState,useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [token,setToken] = useState(null)
  
  
  const handlelogin = (token) => {
    localStorage.setItem("token",token);
    setToken(token)
    
  }

  useEffect(
    () => {
      const token = localStorage.getItem("token");
      if (token) {
        setToken(token);
      }
    },
    []
  )
  
  return (
    <AuthContext.Provider value={{handlelogin,token}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
};