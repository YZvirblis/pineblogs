import React from 'react'
import Feed from '../components/Feed'
import Users from '../components/Users'
import { homeStyle } from '../styles'

const Home = () => {
  return (
    <homeStyle.MainContainer>
      <Feed/>
    </homeStyle.MainContainer>
  )
}

export default Home