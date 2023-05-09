import React, { FormEvent, KeyboardEvent, useEffect, useState, useRef } from 'react'
import { FaArrowAltCircleRight, FaBackspace, FaPhotoVideo } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { feedStyle, loginStyle } from '../styles'
import { createPostStyle, homeStyle } from '../styles'
import { Editor } from "@tinymce/tinymce-react";

const CreatePost = () => {
    const editorRef = useRef<Editor>();
    const { auth } = useAuth()
    const axiosPrivate = useAxiosPrivate()
    // const [content, setContent] = useState("")
    const [currentTag, setCurrentTag] = useState("")
    const [tags, setTags] = useState<string[]>([])
    const navigate = useNavigate()

    useEffect(() => {
    }, [tags])

    const addTag = () => {
        setTags([...tags, currentTag.replaceAll(' ', '').replaceAll("#", "")]);
        setCurrentTag("")
    }

    const createPost = async () => {
        //@ts-ignore
        const content = editorRef && editorRef.current && editorRef.current.getContent()
        if (content.length > 0) {
            const post = {
                userID: auth.user._id,
                desc: content,
                tags
            }
            const res = await axiosPrivate.post("/v1/posts/create/", post)
            setTags([])
            setCurrentTag("")
            navigate("/")
        } else {
            console.log("WRITE SOMETHING")
        }
    }

    return (
        <homeStyle.MainContainer>
            <createPostStyle.mainContainer>
                <feedStyle.CreatePostContainer>
                    <Editor
                        onInit={ (evt, editor) => {
                            //@ts-ignore
                            editorRef.current = editor
                        } }
                        apiKey={ process.env.REACT_APP_TINYMCE_API_KEY }
                        initialValue="<p>Write here 🌲</p>"
                        init={ {
                            height: 500,
                            width: "100%",
                            menubar: false,
                            link_assume_external_targets: true,
                            plugins:
                                'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount emoticons'
                            ,
                            toolbar: "undo redo | styleselect | bold italic underline | fontsize | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media fullscreen | forecolor backcolor emoticons",
                            default_link_target: '_blank',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        } }
                    />
                    <feedStyle.PostTagsInputContainer>
                        <feedStyle.PostTagsInput placeholder='#Tags' value={ currentTag } onChange={ (e: FormEvent) => {
                            //@ts-ignore
                            setCurrentTag(e.target.value)
                        } }
                            onKeyDown={ (e: KeyboardEvent) => {
                                // console.log(e.keyCode)
                                e.keyCode === 13 && currentTag !== "" && addTag()
                            } } />
                        <span className='absolute right-3 cursor-pointer' onClick={ () => { currentTag !== "" && addTag() } }><FaArrowAltCircleRight /></span>
                    </feedStyle.PostTagsInputContainer>
                    {
                        tags.length > 0
                            ?
                            <feedStyle.TagsContainer>
                                { tags.map((tag, index) => {
                                    return <feedStyle.TagContainer>
                                        <span>{ `#${tag}` }</span>
                                        <span className='cursor-pointer' onClick={ () => {
                                            const arr = tags
                                            arr.splice(index, 1)
                                            setTags([...arr])
                                        } }><FaBackspace /></span>
                                    </feedStyle.TagContainer>
                                }) }
                            </feedStyle.TagsContainer>
                            : null
                    }
                    <loginStyle.ButtonContainer>
                        <loginStyle.StyledButton onClick={ () => createPost() }>POST</loginStyle.StyledButton>
                    </loginStyle.ButtonContainer>
                </feedStyle.CreatePostContainer>
            </createPostStyle.mainContainer>
        </homeStyle.MainContainer>

    )
}

export default CreatePost