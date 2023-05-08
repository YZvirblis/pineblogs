import React, { FormEvent, useEffect, useState } from 'react'
import { FaComment, FaHeart, FaTrash } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import { feedStyle } from '../styles'
import TextareaAutosize from 'react-textarea-autosize';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { formatDate, commentsOrderByDate } from './tools/HelperFunctions';


const Post = ({ post }: any) => {
    const [commentInput, setCommentInput] = useState("")
    const { auth } = useAuth()
    const axiosPrivate = useAxiosPrivate()
    const [sideBtnsBackgroundIndex, setSideBtnsBackgroundIndex] = useState<null | number>(null)


    const [isLiked, setIsLiked] = useState(false)
    const [comments, setComments] = useState<any>()

    useEffect(() => {
        if (!comments) {
            setComments(post.comments)
        }
        if (sideBtnsBackgroundIndex == null) {
            setSideBtnsBackgroundIndex(Math.floor(Math.random() * 6))
        }
        console.log(sideBtnsBackgroundIndex)
    }, [comments, sideBtnsBackgroundIndex])


    const postComment = async () => {
        if (commentInput.length > 0) {

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
            try {
                const res = await axiosPrivate.post("/v1/posts/comment/", { comment })
            } catch (err) {
                console.log(err)
            }
        }

    }

    return (
        <feedStyle.PostContainer>
            <feedStyle.postContent>

                <div dangerouslySetInnerHTML={ { __html: post.desc } } style={ { width: "90%", padding: "3vw" } } />

                <feedStyle.postSideBtnsContainer
                    //@ts-ignore
                    bgIndex={ sideBtnsBackgroundIndex }>
                    {
                        auth.user ?
                            <feedStyle.sideBtn
                                //@ts-ignore
                                liked={ isLiked }><FaHeart />
                            </feedStyle.sideBtn>
                            : null }
                    { auth.user && post.userID == auth.user._id ?
                        <feedStyle.sideBtn
                            //@ts-ignore
                            liked={ false }><FaTrash />
                        </feedStyle.sideBtn>
                        : null }

                </feedStyle.postSideBtnsContainer>


            </feedStyle.postContent>
            { comments && comments.length > 0 ?
                <feedStyle.commentsSection>
                    { comments.map((c: any, i: any) => {
                        const d = formatDate(c.date)
                        return (
                            <feedStyle.commentWrapper key={ i }>
                                <div style={ { display: "flex", flexDirection: "row", justifyContent: "flex-start" } }>
                                    <span style={
                                        { fontWeight: auth.user && c.userID == auth.user._id && "bolder", color: auth.user && c.userID == auth.user._id && "light-green", margin: "0 1vw 0 0" } }>{ c.username + ": " }</span>
                                    <p>{ c.text }</p>
                                </div>
                                <div style={ { display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center" } }>
                                    <span>{ (d) }</span>
                                    { auth.user && c.userID == auth.user._id ?
                                        <feedStyle.postSideBtnsContainer>
                                            <feedStyle.sideBtn
                                                //@ts-ignore
                                                liked={ false } small><FaTrash /></feedStyle.sideBtn>
                                        </feedStyle.postSideBtnsContainer>
                                        : null }

                                </div>
                            </feedStyle.commentWrapper>
                        )
                    }).sort(commentsOrderByDate) }
                    { auth.user ?
                        <feedStyle.wrightCommentWrapper>
                            <TextareaAutosize value={ commentInput } style={ { width: "75%", padding: "1vw", resize: "none", borderRadius: "10px", border: "solid 1px black", overflow: "hidden" } } onChange={ (e: FormEvent) => {
                                //@ts-ignore
                                setCommentInput(e.target.value)
                            } } />
                            <feedStyle.commentButton onClick={ () => postComment() }><FaComment /></feedStyle.commentButton>
                        </feedStyle.wrightCommentWrapper>
                        : null
                    }
                </feedStyle.commentsSection>
                : auth.user ?
                    <feedStyle.commentsSection>
                        <feedStyle.wrightCommentWrapper>
                            <TextareaAutosize value={ commentInput } style={ { width: "75%", padding: "1vw", resize: "none", borderRadius: "10px", border: "solid 1px black", overflow: "hidden" } } onChange={ (e: FormEvent) => {
                                //@ts-ignore
                                setCommentInput(e.target.value)
                            } } />
                            <feedStyle.commentButton onClick={ () => postComment() }><FaComment /></feedStyle.commentButton>
                        </feedStyle.wrightCommentWrapper>
                    </feedStyle.commentsSection>

                    : null

            }
        </feedStyle.PostContainer>

    )
}

export default Post