import styled from "styled-components"


const MainContainer = styled.div`
width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
    margin: 1vh 0 1vh 0;
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

export {MainContainer, PostsContainer, PostContainer, CreatePostContainer, CreatePostInput, PostTagsInput, PostTagsInputContainer, TagContainer, TagsContainer, IconsContainer, styledIcon}