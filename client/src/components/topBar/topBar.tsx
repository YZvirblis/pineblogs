import React, { useEffect } from 'react'
import { topBarStyle } from '../../styles'
import { loginStyle } from '../../styles';
import { useLocation , useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import profilePlaceholder from "../../resources/pictures/profile.jpg"


const TopBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const logout = useLogout()
  const {auth, persist} = useAuth()


  useEffect(() => {
    console.log(auth)
  }, [])
  

  const renderLoggedOut = () => {
    return (
      <topBarStyle.MainContainer>
      <topBarStyle.ItemContatiner>
      </topBarStyle.ItemContatiner>
      <topBarStyle.ItemContatiner>
        <div className='flex row justify-around align-center items-center'>
          <topBarStyle.title>Pineblogs</topBarStyle.title>
          <topBarStyle.logo src={require("../../resources/pictures/logo.png")}/>
        </div>
      </topBarStyle.ItemContatiner>
      <topBarStyle.ItemContatiner>
        {/*@ts-ignore*/}
          <loginStyle.StyledButton onClick={() => navigate(location.pathname === "/register" ? "/login" : "/register")} size="small">{location.pathname === "/register" ? "Login" : "Register"}</loginStyle.StyledButton>
      </topBarStyle.ItemContatiner>
</topBarStyle.MainContainer>
    )
  }
  const renderLoggedIn = () => {
    return (
      <topBarStyle.MainContainer>
      <topBarStyle.ItemContatiner>
        <topBarStyle.profileContainer onClick={() => navigate(`/profile?id=${auth.user._id}`)}>
          <topBarStyle.profileImage src={auth.user.image ? auth.user.image : profilePlaceholder}/>
          <topBarStyle.username>{auth.user.username}</topBarStyle.username>
        </topBarStyle.profileContainer>
      </topBarStyle.ItemContatiner>
      <topBarStyle.ItemContatiner>
        <div onClick={() => navigate("/")} className='flex row justify-around align-center items-center'>
          <topBarStyle.logo src={require("../../resources/pictures/logo.png")}/>
        </div>
      </topBarStyle.ItemContatiner>
      <topBarStyle.ItemContatiner>
        {/*@ts-ignore*/}
          <loginStyle.StyledButton onClick={() => {logout(); navigate("/login");}} size="small">Logout</loginStyle.StyledButton>
      </topBarStyle.ItemContatiner>
</topBarStyle.MainContainer>
    )
  }
  
  return (
    <topBarStyle.MainContainer>
      {!auth.user ? renderLoggedOut() : renderLoggedIn()}
    </topBarStyle.MainContainer>
  )
}

export default TopBar