import React, { ReactNode } from 'react'
import styled from "styled-components"
import { JsxElement } from 'typescript'

interface props {
    color: string,
    children: ReactNode
}
const SocialMediaIcon = ({color, children} : props) => {
  return (
    //@ts-ignore
    <StyledIcon backgroundColor={color}>{children}</StyledIcon>
  )
}

const StyledIcon = styled.h3`
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4rem;
    color: white;
    cursor: pointer;
    background: ${(props) => {
        //@ts-ignore
        return props.backgroundColor}};
    svg{
        width: 1.5rem;
        height: 1.5rem;

    }
`

export default SocialMediaIcon