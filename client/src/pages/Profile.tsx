import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { profileStyle } from '../styles';
import { feedStyle } from '../styles'
import Post from '../components/Post';


const Profile = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const profileID = searchParams.get("id")
    const axiosPrivate = useAxiosPrivate()
    const {auth, setAuth} = useAuth()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        !profileID && navigate("/")
        profileID !== auth.user._id && navigate("/")
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        const res = await axiosPrivate.get(`/v1/posts/getuserposts/${auth.user._id}`)
        setPosts(res.data)
    }
    
  return (
    <profileStyle.MainContainer>
            <feedStyle.MainContainer>
            {/* <CreatePost/> */}
            <feedStyle.PostsContainer>
            {
                posts.map((post: any, index: number) => {
                    return <Post key={index} post={post}/>
                })
            }
            </feedStyle.PostsContainer>
      </feedStyle.MainContainer>
    </profileStyle.MainContainer>
  )
}

export default Profile