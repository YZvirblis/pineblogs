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
const ProfilePicture = styled.img`
    width: 50%;
    height: 100%;
    border-radius: 25px;
    border: solid 1px black;
    background-image: url(${props => props.img ? props.img : require("../resources/pictures/profile.jpg")});
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
    font-size: 5vw;
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
`
const About = styled.p`
    font-size: x-large;
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
    cursor: pointer;
    svg{
        width: 1rem;
        height: 1rem;

    }
`




export {MainContainer, ErrorMessage, ProfileContainer, ProfilePicture, Username, DetailsContainer, FullNameContainer, LocationContainer, About, AboutContainer, InfoContainer, Icon}