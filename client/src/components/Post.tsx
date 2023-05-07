import React, { useEffect, useState } from 'react'
import { FaComment, FaHeart, FaPencilAlt } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { feedStyle } from '../styles'


const Post = ({post}: any) => {
    const {auth} = useAuth()
    
    const [isLiked, setIsLiked] = useState(false)
    

  return (
            <feedStyle.PostContainer>
                            <div dangerouslySetInnerHTML={{__html: post.desc}}></div>
                            {
                                auth.user ?
                                <feedStyle.IconsContainer>
                    {/*@ts-ignore*/}
                        <feedStyle.styledIcon liked = {isLiked}><FaHeart/></feedStyle.styledIcon>
                        <feedStyle.styledIcon><FaComment/></feedStyle.styledIcon>
                </feedStyle.IconsContainer>
            : null    
            }
            </feedStyle.PostContainer>
  )
}

export default Post