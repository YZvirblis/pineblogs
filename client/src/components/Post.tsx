import React, { useState } from 'react'
import { FaComment, FaHeart, FaPencilAlt } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { feedStyle } from '../styles'


const Post = ({post}: any) => {
    const {auth} = useAuth()
    
    const [isLiked, setIsLiked] = useState(false)

  return (
            <feedStyle.PostContainer>
                        {/* {
                            auth.user._id === post.userID
                                ?
                                    <feedStyle.styledIcon><FaPencilAlt/></feedStyle.styledIcon>
                                :
                                    null
                        } */}
                <p>{post.desc}</p>
                <feedStyle.IconsContainer>
                    {/*@ts-ignore*/}
                        <feedStyle.styledIcon liked = {isLiked}><FaHeart/></feedStyle.styledIcon>
                        <feedStyle.styledIcon><FaComment/></feedStyle.styledIcon>
                </feedStyle.IconsContainer>
            </feedStyle.PostContainer>
  )
}

export default Post