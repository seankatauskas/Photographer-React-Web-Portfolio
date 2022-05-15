import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {Link as LinkR} from "react-router-dom";

export const SidebarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({isOpen}) => isOpen ? '100%' : '0'};
    top: ${({isOpen}) => isOpen ? '0' : '-100%'};
 `;



 export const NavLogo = styled(LinkR) `
    color: #262626;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    margin-left: auto;
    font-weight: 600;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 3px;
    word-spacing: 3px;

    :hover { 
        color: orange;
    }
    
    @media screen and (max-width: 480px) {
        letter-spacing: 2px;
    }
`

 

 export const Icon = styled.div `
    // transform: translate(0%, 12%);
    font-size: 1.7rem;
    cursor: pointer;
    color: #262626;
    padding: 1.15rem;
    font-weight: 300;


    // @media screen and (max-width: 480px) {
    //     font-size: 1.2rem;
    // }
  `;
 
  export const SidebarLink = styled(LinkR)`
    //   display: block;
    //   align-items: center;
    //   justify-content: center;
    //   font-size: 1.5rem;
    //   text-decoration: none;
    //   list-style: none;
    //   transition: 0.2s ease-in-out;
    //   text-decoration: none;
    //   color: black;
    //   cursor: pointer;


    // &.hover {
    //     color: #01bf71;
    //     transition: 0.2s ease-in-out;
    // }



    color: #262626;
    font-weight: 300;
    
    
    // align-items: center;
    
    height: 2rem;
    
    cursor: pointer;
    text-decoration: none;
    outline: none;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    // flex-direction: column;
    width: fit-content;
    margin: auto;


    :hover {
        
        color: orange;
        text-decoration: underline;
        transition: 0.1s ease-in;
    }
`



export const SidebarWrapper = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    
    @media screen and (max-width: 480px) {
        padding: 0 0px;
    }
    
    // position: sticky;
    // margin: 0;
`

   export const SidebarMenu = styled.ul `
   display: grid;
   grid-template-columns: 1fr;
   grid-template-rows: repeat(4, 1fr);
   text-align: center;
   height: 70%;
   align-items: center;
   

   

   @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 1fr);
   `


