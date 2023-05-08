import styled from "styled-components"


const MainContainer = styled.div`
width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    align-self: center;
    justify-self: center;
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
    padding: 3vw;
    background: white;
    border-radius: 10px;
    margin: 1vh 0 10 0;
    -webkit-box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65); 
box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65);
z-index: 1;
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
    align-items: start;
    justify-content: space-between;
    padding: 1vw;
`

const sideBtn = styled.button`
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.liked ? "red" : "white"};
    -webkit-box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65); 
    box-shadow: 0px 8px 10px -2px rgba(0,0,0,0.65);
    align-items: center;
    align-content: center;
    text-align: center;
    justify-content: center;
    font-size: larger;
    margin: 1vh;

`
const postSideBtnsContainer = styled.div`
display: flex;
flex-direction: column;
    position: absolute;
    right: 3vw;
`

export {MainContainer, PostsContainer, PostContainer, CreatePostContainer, CreatePostInput, PostTagsInput, PostTagsInputContainer, TagContainer, TagsContainer, IconsContainer, styledIcon, commentsSection, wrightCommentWrapper, wrightCommentInput,commentButton,commentWrapper, sideBtn, postSideBtnsContainer}