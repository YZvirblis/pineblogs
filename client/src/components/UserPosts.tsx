
import { feedStyle } from '../styles'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import Post from './Post';


const UserPosts = () => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    const profileID = searchParams.get("id")
    const axiosPrivate = useAxiosPrivate()
    const { auth, setAuth } = useAuth()
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
        <feedStyle.MainContainer>
            <feedStyle.PostsContainer>
                {
                    posts.map((post: any, index: number) => {
                        return <Post key={ index } post={ post } />
                    })
                }
            </feedStyle.PostsContainer>
        </feedStyle.MainContainer>
    )
}

export default UserPosts