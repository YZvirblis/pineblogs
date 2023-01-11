import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {

    const navigate = useNavigate()
  
    useEffect(() => {
      const userFromLocalStorage = localStorage.getItem("token")
      if (!userFromLocalStorage){
        navigate("/auth")
      }
    }, [])
  return (
    <div>HomePage</div>
  )
}

export default HomePage