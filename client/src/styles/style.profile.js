import styled from "styled-components"

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: lightgreen;
    font-family: 'Amatic SC', cursive;
`

const ErrorMessage = styled.h1`
    color: red;
    font-size: xx-large;
    font-weight: bold;
`
const ProfileContainer = styled.div`
width: 1000px;
height: 500px;
border-radius: 10px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 2vw;
cursor:default
`
const ProfilePictureContainer = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 25px;
    border: solid 1px black;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const ProfilePicture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
    background-image: url(${props => props.img ? props.img : require("../resources/pictures/profile.jpg")});
    background-size: cover;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 90%;
    background: white;
    align-items: center;
    justify-content: flex-start;
    padding: 2vw;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Username = styled.h1`
    font-size: 2vw;
    letter-spacing: 0.2rem;
    color: black;
`
const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    font-size: large;
    font-weight: bold;
    text-align: center;
`
const FullNameContainer = styled.div`
    margin-right: 1vw;
    display: flex;
    span{
        margin:  0 3px 0 3px;
    }
`
const LocationContainer = styled.div`
display: flex;
flex-direction: row;
text-align: center;
align-items: center;
justify-content: center;
    margin-left: 1vw;
`

const AboutContainer = styled.div`
    padding: 1vw;
    border-radius: 25px;
    font-weight: bold;
    width: 100%;
    height: 100%;
`
const About = styled.p`
    font-size: x-large;
    word-wrap: break-word;
`

const Icon = styled.h3`
    height: 2rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: gray;
    background: ${props => props.withBg ? "lightgray" : ""};
    cursor: ${props => props.pointer ? "pointer" : "default"};
    svg{
        width: 1rem;
        height: 1rem;

    }
`

const UsernameInput = styled.input`
    border: solid 1px gray;
    border-radius: 10px;
    text-align: center;
    font-size: 2vw;
    letter-spacing: 0.2rem;
    color: black;
    margin-bottom: 5px;
    width: 100%;
`

const NameInput = styled.input`
    width: 75%;
    margin: 0 2px 0 2px;
    border: solid 1px gray;
    border-radius: 10px;
    text-align: center;
    color: black;
`

const AboutInput = styled.textarea`
    border: solid 1px gray;
    border-radius: 10px;
    color: black;
    font-size: x-large;
    width: 100%;
    height: 100%;
`




export {MainContainer, ErrorMessage, ProfileContainer, ProfilePicture, Username, DetailsContainer, FullNameContainer, LocationContainer, About, AboutContainer, InfoContainer, Icon, UsernameInput, NameInput, AboutInput, ProfilePictureContainer}