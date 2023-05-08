import React, { FormEvent, useEffect, useState } from 'react'
import { FaComment, FaHeart, FaTrash } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { feedStyle } from '../styles'
import TextareaAutosize from 'react-textarea-autosize';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { formatDate, commentsOrderByDate } from './tools/HelperFunctions';


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
                username: auth.user.username,
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
                                <feedStyle.postSideBtnsContainer>
                                    
                        <feedStyle.sideBtn
                            //@ts-ignore
                            liked = {isLiked}><FaHeart/></feedStyle.sideBtn>
                            {auth.user && post.userID == auth.user._id ? 
                        <feedStyle.sideBtn
                        //@ts-ignore
                        liked = {false}><FaTrash/></feedStyle.sideBtn>
                    : null}
                                </feedStyle.postSideBtnsContainer>
            : null
            }
            </feedStyle.PostContainer>
            {comments && comments.length > 0 ?
            <feedStyle.commentsSection>
                {comments.map((c: any ,i: any) => {
                    const d = formatDate(c.date)
                    return(
                        <feedStyle.commentWrapper key={i}>
                            <div>
                                <span style={auth.user && c.userID == auth.user._id ? {fontWeight:"bold", color:"light-green"} : {fontWeight:"normal"}}>{c.username + ": "}</span>
                                <p>{c.text}</p>
                            </div>
                            <span>{(d)}</span>
                            {auth.user && c.userID == auth.user._id ? 
                                <feedStyle.postSideBtnsContainer>

                        <feedStyle.sideBtn
                        //@ts-ignore
                        liked = {false}><FaTrash/></feedStyle.sideBtn>
                        </feedStyle.postSideBtnsContainer>
                    : null}
                        </feedStyle.commentWrapper>
                    )
                }).sort(commentsOrderByDate)}
                {auth.user?
                <feedStyle.wrightCommentWrapper>
                <TextareaAutosize value={commentInput} style={{width:"75%", padding:"1vw", resize:"none", borderRadius:"10px", border:"solid 1px black", overflow:"hidden"}} onChange={(e:FormEvent) => {
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
                <TextareaAutosize value={commentInput} style={{width:"75%", padding:"1vw", resize:"none", borderRadius:"10px", border:"solid 1px black", overflow:"hidden"}} onChange={(e:FormEvent) => {
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