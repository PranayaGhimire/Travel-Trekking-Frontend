'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';

const AuthContext = createContext<any>(null);
const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const [user,setUser] = useState<string | null>();
    const [token,setToken] = useState<string | null>();

    useEffect(() => {
        const tokenFromCookie = Cookies.get("token");
        const userFromStorage = localStorage.getItem("user");
        setToken(tokenFromCookie);
        if (userFromStorage)
            setUser(JSON.parse(userFromStorage));
    },[])
  return (
    <AuthContext.Provider value={{token,setToken,user,setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);
