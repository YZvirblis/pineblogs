import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { feedStyle } from '../styles'
import CreatePost from './CreatePostComponent'
import Post from './Post'


const Discover = () => {
    const {auth} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [posts, setPosts] = useState([])


    const fetchPosts = async () => {
        const res = await axiosPrivate.get(`/v1/posts/all/`)
        setPosts(res.data)
    }

    useEffect(() => {
            fetchPosts()
    }, [posts])
    

return (
    <feedStyle.MainContainer>
        <feedStyle.PostsContainer>
        {
            posts.map((post: any, index: number) => {
                return <Post key={index} post={post} />
            })
        }
        </feedStyle.PostsContainer>
  </feedStyle.MainContainer>
  )
}

export default Discover