import styled from "styled-components"
import backgrounds from "../resources/backgrounds"



const MainContainer = styled.div`
width: 90%;
    display: flex;
    flex-direction: row;
    margin: 2vh 0 2vh 0;
`
const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const PostContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;

    margin: 1vh;

`
const postContent = styled.div`
    -webkit-box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65);
    background: white;
    border-radius: 10px;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: row;
`
const IconsContainer = styled.div`
margin-top: 3vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
`
const styledIcon = styled.span`
    color: ${props => props.liked ? "red" : "grey"};
    cursor: pointer;
`
const CreatePostContainer = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0 0 25px 25px;
    margin: 0 0 1vw 0;

`
const CreatePostInput = styled.textarea `
    border-radius: 25px;
    margin: 1vw;
    padding: 1vw;
    width: 90%;
    height: 25vh;
    resize: none;

`

const PostTagsInputContainer = styled.div `
    position: relative;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1vh;
`

const PostTagsInput = styled.input `
    width: 100%;
    border-radius: 25px;
    padding: 5px 1vw 5px 1vw;
`
const TagsContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`
const TagContainer = styled.div `
    border-radius: 10px;
    background: lightgray;
    color: white;
    padding: 3px;
    margin: 3px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    && span {
        margin: 0 2px 0 2px;
    }
`
const commentsSection = styled.div`
    width: 90%;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 2vw 1vw 1vw 1vw;
    -webkit-box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65); 
box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65);
`
const wrightCommentWrapper = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-evenly;
 width: 100%;
 height: fit-content;
 align-items: center;
 margin-top: 2vh;
`
const wrightCommentInput = styled.textarea`
 width: 100%;
 height: fit-content;
 overflow-wrap: break-word;
 border-radius: 10px;
 overflow: hidden;
 resize: none;
 padding: 1vw;
 box-sizing: border-box;

`
const commentButton = styled.button`
border-radius: 100px;
padding: 1vw;
background-color: lightgreen;
color: white;
height: 50px;
width: 50px;
display: flex;
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    font-size: larger;
`
const commentWrapper = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5vw;
    border-bottom: 1px lightgray solid;
`

const sideBtn = styled.button`
    display: flex;
    width: ${props => props.small ? "25px" : "50px"};
    height: ${props => props.small ? "25px" : "50px"};
    font-size: ${props => props.small ? "small" : "larger"};
    border-radius: 50%;
    background-color: ${props => props.liked ? "red" : "white"};
    -webkit-box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65);
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    margin: 1vh;

`
const postSideBtnsContainer = styled.div`
display: flex;
flex-direction: column;
width: 10%;
background-image: url(${props => backgrounds[props.bgIndex]});
background-size: cover;

align-items: center;
justify-content: flex-start;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
padding: 1vw;
`

export {MainContainer, PostsContainer, PostContainer, CreatePostContainer, CreatePostInput, PostTagsInput, PostTagsInputContainer, TagContainer, TagsContainer, IconsContainer, styledIcon, commentsSection, wrightCommentWrapper, wrightCommentInput,commentButton,commentWrapper, sideBtn, postSideBtnsContainer, postContent}