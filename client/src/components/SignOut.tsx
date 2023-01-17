import React from 'react'
import useLogout from '../hooks/useLogout'
import { useNavigate } from 'react-router-dom'

function SignOut() {
  const logOut = useLogout()
  const navigate = useNavigate()

  const signOut = async () => {
    await logOut()
    navigate('/login')
  }
  return (
    <button onClick={() => signOut()}>SIGN OUT</button>
  )
}

export default SignOut