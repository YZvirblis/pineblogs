import styled from "styled-components"

const MainContainer = styled.div`
    width: 100%;
    height: 10vh;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(9.5px);
    position: fixed;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: .3rem;
    align-items: center;
    text-align: center;
    align-content: center;
`

const ItemContatiner = styled.div`
    width: 10vw;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    padding: .5vh 2vw .5vh 2vw;
    margin-left: 2vw;
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
    font-size: 1.5vw;
`

export {MainContainer, ItemContatiner, logo, title, profileContainer, profileImage, username}