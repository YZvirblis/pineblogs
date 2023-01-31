import styled from "styled-components"
import backgrounds from "../resources/backgrounds"

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    width: 30vw;
    background: rgba(0, 0, 0, 0.15);
    /* box-shadow: 0 8px 32px 0 rgba(31,38,135, 0.37); */
    backdrop-filter: blur(7.5px);
    border-radius: 0 0 10px 10px;

    @media only screen and (max-width: 320px) {
        width: 100vw;
        height: 90vh;
        hr {
            margin-bottom: 0.3rem;
        }
        h4{
            font-size: small;
        }
    }
    @media only screen and (min-width: 320px) {
        width: 95vw;
        height: 90vh;
        h4{
            font-size: small;
        }
    }
    @media only screen and (min-width: 411px) {
        width: 90vw;
        height: 90vh;
    }
    @media only screen and (min-width: 768px) {
        width: 80vw;
        height: 90vh;
    }
    @media only screen and (min-width: 1024px) {
        width: 70vw;
        height: 90vh;
    }
    @media only screen and (min-width: 1280px) {
        width: 30vw;
        height: 80vh;
    }
`

const TitleText = styled.h2`
    margin: 3rem 0 2rem 0;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.direction ? props.direction : "column"};
    align-items: center;
    height: 20%;
    margin: 5px 0 5px 0;
    width: ${props => props.type === "checkbox" ? "75%" : "100%"};
`

const StyledInput = styled.input`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: ${props => props.type === "checkbox" ? "1rem" : "80%"};
    height: ${props => props.type === "checkbox" ? "1rem" : "3rem"};
    padding: 1rem;
    border: none;
    outline: none;
    color: #3c354e;
    font-size: 1rem;
    font-weight: bold;
    margin: 5px;
    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #b9abe0;
        backdrop-filter: blur(12rem);
        border-radius: 2rem;
    }
    &::placeholder{
        color: black;
        font-weight: 100;
        font-size: 1rem;
    }
`

const ButtonContainer = styled.div`
    margin: 1rem 0 2rem 0;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledButton = styled.button`
    background: ${props => props.disabled ? "grey" : "linear-gradient(to right, #14163c 0%, #03217b 79%)"};
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    width: 75%;
    height: 3rem;
    border: none;
    color: white;
    border-radius: 2rem;
    font-size: 1vw;
    cursor: pointer;
    transition: 300ms;
`

const LoginWith = styled.h5`
    cursor: pointer;
`

const HorizontalRule = styled.hr`
    width: 90%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    margin: 1.5rem  0 1rem 0;
    background: linear-gradient(to right, #14163c 0%, #03217b 79%);
    backdrop-filter: blur(25px);
`

const IconsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 2rem 0 3rem 0;
    width: 80%;
`

const ForgotPassword = styled.h4`
cursor: pointer;
`
const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background-size: cover;
    background-image: url(${backgrounds[Math.floor(Math.random() * 6)]});
    /* background: radial-gradient(circle, rgba(219,181,66,1) 0%, rgba(136,217,58,1) 35%, rgba(90,185,131,1) 100%); */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: uppercase; 
    position: relative;
    letter-spacing: 0.4rem;
    cursor: default;
    
    `
const RedirectContainer = styled.div`
    letter-spacing: 0rem;
    width: 35%;
    height: 10vh;
    background: linear-gradient(0deg, rgba(255,162,0,1) 0%, rgba(216,221,9,1) 35%, rgba(255,239,0,1) 100%);;
    position: absolute;
    top: 0;
    z-index: 1;
    border-radius: 0 0 25px 25px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: small;
    color:black;
    @media only screen and (max-width: 320px) {
        width: 100vw;
    }
    @media only screen and (min-width: 320px) {
        width: 95vw;
    }
    @media only screen and (min-width: 411px) {
        width: 50vw;
    }
    @media only screen and (min-width: 768px) {
        width: 35vw;
    }
    @media only screen and (min-width: 1024px) {
        width: 25vw;
    }
    @media only screen and (min-width: 1280px) {
        width: 20vw;
    }
`

export {MainContainer, TitleText, InputContainer, StyledInput, ButtonContainer, StyledButton, LoginWith, HorizontalRule, IconsContainer, ForgotPassword,PageContainer, RedirectContainer}