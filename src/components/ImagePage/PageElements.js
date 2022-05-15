import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {Link as LinkR} from "react-router-dom";

export const ImageContainer = styled.div `
    // create a container for the image
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 90vw;
    
    
    height: 80vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }


    @media screen and (max-width: 450px) {
        height: 75vh;
    }
`

export const Sub = styled.div `
    display: flex;
    width: 30vw;
    margin: 0 auto;
    padding: 2px 0;

    @media screen and (max-width: 450px) {
        width: 80vw
    }
`


export const EmailJR = styled.div `
    margin-right: auto;
    color: #828487;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;

   
`

export const NumLink = styled(LinkR) `
    cursor: pointer;
    color: #262626;
    padding: 0 0.5rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    font-weight: 400;
    font-size: 1rem;
    color: #828487;

    // hover
    &:hover {
        color: green;
        // add a border
        border: 1px solid green;
    }
   
`