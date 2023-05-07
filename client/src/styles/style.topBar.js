import styled from "styled-components"

const MainContainer = styled.div`
margin: 0;
    width: 100vw;
    height: 10vh;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(9.5px);
    /* position: fixed; */
    top: 0;
    /* z-index: 2; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .3rem;
    align-items: center;
    text-align: center;
    align-content: center;
`

const ItemContatiner = styled.div`
    width: 30%;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.align};
    margin: 0 10px 0 10px;
`
const logo = styled.img`
width: 35px;
height: 35px;
cursor: pointer;
`

const title = styled.h1`
    letter-spacing: 0.4rem;
    text-transform: uppercase; 
    font-family: 'Amatic SC', cursive;
    font-weight: 700;
    font-size: 3vw;
`

const profileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    border: 2px solid green;
    padding: .5vh 1vw .5vh 1vw;
    border-radius: 5px;
    cursor: pointer;
`

const profileImage = styled.img`
    width: 2vw;
    background-size: cover;
    border-radius: 50%;
    margin-right: .5vw;
    border: solid 1px darkgreen;
`

const username = styled.span`
    text-decoration: underline;
    font-size: 1vw;
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
const redirectButton = styled.div`
background-color: white;
border-radius: 10%;
width: 100px;
padding: .5rem 1rem .5rem 1rem;
margin-right: .5rem;
cursor: pointer;

`

export {MainContainer, ItemContatiner, logo, title, profileContainer, profileImage, username, Icon, redirectButton}