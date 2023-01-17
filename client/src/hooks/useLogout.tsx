import React from 'react'
import axios from "../api/axios"
import useAuth from './useAuth'

const useLogout = () => {
    const {setAuth} = useAuth()

    const logOut = async () => {
        setAuth({})
        try{
            const res = await axios("/v1/users/logout", {
                withCredentials: true
            })
        }catch(err){
            console.error(err)
        }
    }
  return logOut
}

export default useLogout