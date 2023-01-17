import React from 'react'
import axios from "../api/axios"
import useAuth from './useAuth'

const useRefreshToken = () => {
    const {setAuth} = useAuth()
    const refresh = async () => {
        const res = await axios.get("/v1/users/refresh" , {
            withCredentials: true
        })
        setAuth((prev: any) => {
            console.log(JSON.stringify(prev))
            console.log(res.data.token)
            return {...prev, token: res.data.token}
        })
        return res.data.token
    }
  return refresh
}

export default useRefreshToken