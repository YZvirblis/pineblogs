import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { feedStyle } from '../styles'
import CreatePost from './CreatePost'
import Post from './Post'


const Feed = () => {
    const {auth} = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [posts, setPosts] = useState([])


    const fetchPosts = async () => {
        const res = await axiosPrivate.get(`/v1/posts/feed/${auth.user._id}`)
        setPosts(res.data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])
    

return (
    <feedStyle.MainContainer>
        <CreatePost/>
        <feedStyle.PostsContainer>
        {
            posts.map((post: any, index: number) => {
                return <Post post={post}/>
            })
        }
        </feedStyle.PostsContainer>
  </feedStyle.MainContainer>
  )
}

export default Feed