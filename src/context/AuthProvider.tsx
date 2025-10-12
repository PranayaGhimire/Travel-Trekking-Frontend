'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import { useGetRefreshToken } from '@/api/authApi';

const AuthContext = createContext<any>(null);
const AuthProvider = ({children}:{children:React.ReactNode}) => {
    const {data,refetch} = useGetRefreshToken();
    const [user,setUser] = useState<string | null>();
    const [token,setToken] = useState<string | null>();

    useEffect(() => {
        const tokenFromCookie = Cookies.get("token");
        const userFromStorage = localStorage.getItem("user");
        setToken(tokenFromCookie);
        if (userFromStorage)
            setUser(JSON.parse(userFromStorage));
    },[])

    useEffect(() => {
      if (data?.accessToken){
        Cookies.set('token',data.accessToken);
        setToken(data.accessToken);
      }
    },[data])

    useEffect(() => {
      const interval = setInterval(() => {
        refetch()
      },15*60*1000)
      return () => clearInterval(interval)
    },[refetch])
  return (
    <AuthContext.Provider value={{token,setToken,user,setUser}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext);
