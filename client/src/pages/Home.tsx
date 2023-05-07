import React from 'react'
import Discover from '../components/Discover'
import Users from '../components/Users'
import { homeStyle } from '../styles'

const Home = () => {
  return (
    <homeStyle.MainContainer>
      <Discover/>
    </homeStyle.MainContainer>
  )
}

export default Home