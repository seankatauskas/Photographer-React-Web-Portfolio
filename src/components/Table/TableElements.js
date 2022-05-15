import styled  from "styled-components";
import { NavLink as Link} from 'react-router-dom'
import {Link as LinkR} from "react-router-dom";


export const TableContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0 28%;
    // height: 70%;

    h3 {
        
        border-bottom: 1px solid #828487;
        line-height: 2rem;
        color: #828487;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
        padding: 10%;
    }
`

export const TableGrid = styled.div `
    display: grid;
    margin-top: 1rem;
    border: 0.2px solid #828487;
    height: 65vh;
    // grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    
`

export const Square = styled.div `
    position: relative;
    border: 0.2px solid #828487;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
   
    // overflow: hidden;
    // overflow-x: hidden;
    // overflow-y: hidden;

    .square::before {
        content: '';
        display: block;
        padding-top: 100%;

      }
`

export const Pagination = styled.div `
    display: flex;
    margin-top: 0.2rem;
    
`

export const EmailJR = styled.div `
    margin-right: auto;
    color: #828487;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
`

export const NavPages = styled.div `
    display: flex;

    h4 {
        padding: 0 0.5rem;
        color: #828487;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    
`

export const ForwardBack = styled.div `
    display: flex; 
    
    h4 {
        margin-left: 1rem;
        color: #828487;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`


export const NumLinkCurr = styled.div `
color: #262626;
padding: 0 0.5rem;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
font-weight: 400;
font-size: 1rem;
color: #828487;
border: 1px solid grey;
`

export const NumLinkPrev = styled.div `
color: #262626;
padding: 0 0.5rem;
font-family: 'Montserrat', sans-serif;
text-decoration: none;
font-weight: 400;
font-size: 1rem;
color: #828487;
// bold font
font-weight: 500;
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

  
 
  
  