import React from 'react'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useRefreshToken from '../hooks/useRefreshToken'
import useAuth from '../hooks/useAuth'

const PersistLogin = () => {
    const [loading, setLoading] = useState(true)
    const refresh = useRefreshToken()
    const {auth, persist} = useAuth()

    const verifyRefreshToken = async () => {
        try{
            await refresh();
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if(loading){
            !auth?.token ? verifyRefreshToken() : setLoading(false)
        }
    }, [])

    useEffect(() => {
        console.log(`is loading: ${loading}` )
        console.log(`token: ${JSON.stringify(auth?.token)}` )
    }, [loading])
    
    

  return (
    <>
    {!persist
        ? 
            <Outlet/>
        : 
            loading
                ?
                    <p>Loading...</p>
                :
                    <Outlet/>}
    </>
  )
}

export default PersistLogin