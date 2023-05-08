import React, { FormEvent, useEffect, useState } from 'react'
import { FaComment, FaHeart, FaPencilAlt } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { feedStyle } from '../styles'
import TextareaAutosize from 'react-textarea-autosize';
import useAxiosPrivate from '../hooks/useAxiosPrivate';


const Post = ({post}: any) => {
    const [commentInput, setCommentInput] = useState("")
    const {auth} = useAuth()
    const axiosPrivate = useAxiosPrivate()

    
    const [isLiked, setIsLiked] = useState(false)
    const [comments, setComments] = useState<any>()
    
    useEffect(() => {
        if(!comments){
            setComments(post.comments)
        }
    }, [comments])
    

    const postComment = async () => {
        if(commentInput.length > 0){

            const comment = {
                userID: auth.user._id,
            postID: post._id,
            text: commentInput,
            date: Date.now()
        }
        const updated = [...comments, comment]
        setComments(updated)
        setCommentInput("")
        try{
            const res = await axiosPrivate.post("/v1/posts/comment/", {comment})
        }catch(err){
            console.log(err)
        }
    }

    }

  return (
    <feedStyle.MainContainer>
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
            {comments && comments.length > 0 ?
            <feedStyle.commentsSection>
                {comments.map(async (c: any ,i: any) => {
                    const res = await axiosPrivate.get(`/v1/users/getuser/${c.userID}`)
                    console.log(res.data)
                    return(
                        <feedStyle.commentWrapper key={i}>
                            <span>{res.data.username}</span>
                            <p>{c.text}</p>
                            <span>{c.date}</span>
                            {c.text}</feedStyle.commentWrapper>
                    )
                })}
                {auth.user?
                <feedStyle.wrightCommentWrapper>
                <TextareaAutosize value={commentInput} style={{width:"75%", padding:"1vw", resize:"none", borderRadius:"10px", border:"solid 1px black"}} onChange={(e:FormEvent) => {
                    //@ts-ignore
                    setCommentInput(e.target.value)
                }}/>
                <feedStyle.commentButton onClick={() => postComment()}><FaComment/></feedStyle.commentButton>
                </feedStyle.wrightCommentWrapper>
                : null 
                }
            </feedStyle.commentsSection>
            : auth.user?
            <feedStyle.commentsSection>
                <feedStyle.wrightCommentWrapper>
                <TextareaAutosize value={commentInput} style={{width:"75%", padding:"1vw", resize:"none", borderRadius:"10px", border:"solid 1px black"}} onChange={(e:FormEvent) => {
                    //@ts-ignore
                    setCommentInput(e.target.value)
                }}/>
                <feedStyle.commentButton onClick={() => postComment()}><FaComment/></feedStyle.commentButton>
                </feedStyle.wrightCommentWrapper>
            </feedStyle.commentsSection>

                : null 
                
            }
            </feedStyle.MainContainer>
  )
}

export default Post