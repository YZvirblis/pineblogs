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
            console.log(`PREVIOUS: ${JSON.stringify(prev)}`)
            console.log(`NOW: ${JSON.stringify({...prev, token: res.data.token, user:res.data.user})}`)
            return {...prev, token: res.data.token, user:res.data.user}
        })
        return res.data.token
    }
  return refresh
}

export default useRefreshToken