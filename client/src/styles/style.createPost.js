import styled from "styled-components"



const mainContainer = styled.div`
width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const quillContainer = styled.div`
overflow: hidden;
    width: 100%;
    border: none;
    min-height: 60vh;
    cursor: default;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const qullEditingArea = styled.div`
    width: 100vw;
    border: none;
    min-height: 60vh;
    cursor: default;

`

export {mainContainer, quillContainer, qullEditingArea, }