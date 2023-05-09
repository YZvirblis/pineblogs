import React from 'react'
import DiscoverPosts from '../components/DiscoverPosts'
import Users from '../components/Users'
import { homeStyle } from '../styles'

const Home = () => {
  return (
    <homeStyle.MainContainer>
      <DiscoverPosts />
    </homeStyle.MainContainer>
  )
}

export default Home