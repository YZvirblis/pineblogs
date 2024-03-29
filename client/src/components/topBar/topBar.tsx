import React, { useEffect } from 'react'
import { topBarStyle } from '../../styles'
import { loginStyle } from '../../styles';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useLogout from '../../hooks/useLogout';
import profilePlaceholder from "../../resources/pictures/profile.jpg"
import { FaDoorClosed } from 'react-icons/fa';



const TopBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const logout = useLogout()
  const { auth, persist } = useAuth()


  useEffect(() => {
    // console.log(auth)
  }, [auth])


  const renderLoggedOut = () => {
    return (
      <topBarStyle.MainContainer>
        <topBarStyle.ItemContatiner>
          <topBarStyle.redirectButton onClick={ () => navigate(`/`) }>DISCOVER</topBarStyle.redirectButton>
          <topBarStyle.redirectButton onClick={ () => navigate(`/random`) }>RANDOM</topBarStyle.redirectButton>
        </topBarStyle.ItemContatiner>
        {/*@ts-ignore*/ }
        <topBarStyle.ItemContatiner align="center">
          <div className='flex row justify-around align-center items-center'>
            <topBarStyle.title>Pineblogs</topBarStyle.title>
            <topBarStyle.logo src={ require("../../resources/pictures/logo.png") } />
          </div>
        </topBarStyle.ItemContatiner>
        {/*@ts-ignore*/ }
        <topBarStyle.ItemContatiner align="right">
          {/*@ts-ignore*/ }
          <loginStyle.StyledButton onClick={ () => navigate(location.pathname === "/login" ? "Register" : "Login") } size="small">{ location.pathname === "/login" ? "Register" : "Login" }</loginStyle.StyledButton>
        </topBarStyle.ItemContatiner>
      </topBarStyle.MainContainer>
    )
  }
  const renderLoggedIn = () => {
    return (
      <topBarStyle.MainContainer>
        {/*@ts-ignore*/ }
        <topBarStyle.ItemContatiner align="left">
          {/* <topBarStyle.profileContainer onClick={() => navigate(`/profile?id=${auth.user._id}`)}>
          <topBarStyle.profileImage src={auth.user.image ? auth.user.image : profilePlaceholder}/>
          <topBarStyle.username>{auth.user.username}</topBarStyle.username>
        </topBarStyle.profileContainer> */}

          <topBarStyle.redirectButton onClick={ () => navigate(`/profile?id=${auth.user._id}`) }>MY PINE</topBarStyle.redirectButton>
          {/* <topBarStyle.redirectButton onClick={() => navigate(`/feed?id=${auth.user._id}`)}>FEED</topBarStyle.redirectButton> */ }
          <topBarStyle.redirectButton onClick={ () => navigate(`/`) }>DISCOVER</topBarStyle.redirectButton>
          {/* <topBarStyle.redirectButton onClick={() => navigate(`/random`)}>RANDOM</topBarStyle.redirectButton> */ }
          <topBarStyle.redirectButton onClick={ () => navigate(`/newpost`) }>CREATE</topBarStyle.redirectButton>

        </topBarStyle.ItemContatiner>
        {/*@ts-ignore*/ }
        <topBarStyle.ItemContatiner align="center">
          <div onClick={ () => navigate("/") } style={ { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: 'Amatic SC', fontSize: "larger", cursor: "pointer" } }>
            <topBarStyle.logo src={ require("../../resources/pictures/logo.png") } />
            <h1>{ auth.user.username }</h1>
          </div>
        </topBarStyle.ItemContatiner>
        {/*@ts-ignore*/ }
        <topBarStyle.ItemContatiner align="right" onClick={ () => { logout(); navigate("/login"); } }>
          <span className='mr-3 cursor-pointer'>Logout</span>
          {/*@ts-ignore*/ }
          <topBarStyle.Icon withBg pointer><FaDoorClosed /></topBarStyle.Icon>
        </topBarStyle.ItemContatiner>
      </topBarStyle.MainContainer>
    )
  }

  return (
    <>
      { !auth.user ? renderLoggedOut() : renderLoggedIn() }
    </>
  )
}

export default TopBar