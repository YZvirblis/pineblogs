import React, { FormEvent, KeyboardEvent, useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaBackspace, FaPhotoVideo } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { feedStyle, loginStyle } from '../styles'
import SocialMediaIcon from './reusables/SocialMediaIcon'


const CreatePost = () => {
    const {auth} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [content, setContent] = useState("")
    const [currentTag, setCurrentTag] = useState("")
    const [tags, setTags] = useState<string[]>([])

    useEffect(() => {

    }, [tags])
    
 const addTag = () => {
    setTags([...tags, currentTag.replaceAll(' ', '')]);
    setCurrentTag("")
}

const createPost = async () => {
    if(content.length > 0) {
        const post = {
            userID: auth.user._id,
            desc: content,
            tags
        }
        console.log(post)
        const res = await axiosPrivate.post("/v1/posts/create/", post)
        setContent("")
        setTags([])
        setCurrentTag("")
    } else {
        console.log("WRITE SOMETHING")
    }
}

const uploadPhotoBg = "linear-gradient(to right, #89e787 0%, #35ce47 100%);"
  return (
    <feedStyle.CreatePostContainer>
    <feedStyle.CreatePostInput maxLength={500} placeholder='Write something :)' value={content} onChange={(e: FormEvent) => {
      //@ts-ignore
      setContent(e.target.value);
      }}/>
    <feedStyle.PostTagsInputContainer>
      <feedStyle.PostTagsInput placeholder='#Tags' value={currentTag} onChange={(e: FormEvent) => {
          //@ts-ignore
          setCurrentTag(e.target.value)}}
          onKeyDown={(e: KeyboardEvent) => {
              // console.log(e.keyCode)
              e.keyCode === 13 && addTag()
              }}/>
      <span className='absolute right-3 cursor-pointer' onClick={() => addTag()}><FaArrowAltCircleRight/></span>
    </feedStyle.PostTagsInputContainer>
    {
      tags.length > 0
          ? 
          <feedStyle.TagsContainer>
{            tags.map((tag, index) => {
              return <feedStyle.TagContainer>
                  <span>{`#${tag}`}</span>
                  <span className='cursor-pointer' onClick={() => {
                      const arr = tags
                      arr.splice(index, 1)
                      setTags([...arr])
                  }}><FaBackspace/></span>
              </feedStyle.TagContainer>
          })}
          </feedStyle.TagsContainer>
          : null
    }
    <loginStyle.ButtonContainer>
              <SocialMediaIcon color={`${uploadPhotoBg}`}><FaPhotoVideo/></SocialMediaIcon>
              <loginStyle.StyledButton onClick={() => createPost()}>POST</loginStyle.StyledButton>
          </loginStyle.ButtonContainer>
  </feedStyle.CreatePostContainer>
  )
}

export default CreatePost