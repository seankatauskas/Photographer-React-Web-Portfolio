import styled  from "styled-components";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll"
import { NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav `
    
    height: 80px;
    // margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    

    @media screen and (max-width: 960px) {
    transition: all 0.8s ease;
    }
`

export const NavbarContainer = styled.div `
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;

    @media screen and (max-width: 480px) {
        padding: 0 0px;
    }
    
`

export const NavLogo = styled(LinkR) `
    color: #262626;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    // margin-right: 24px;
    margin-left: auto;
    font-weight: 600;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    letter-spacing: 3px;
    word-spacing: 3px;
    // transition: 0.2s ease-in-out;

    :hover { 
        color: orange;
    }
    @media screen and (max-width: 480px) {
        letter-spacing: 2px;
    }
`

export const MobileIcon = styled.div ` 
        // display: block;
        // position: absolute;
        // top: 0;
        // right: 0;
        // transform: translate(0%, 12%);
        font-size: 1.7rem;
        cursor: pointer;
        color: #262626;
        padding: 1.15rem;
        font-weight: 300;
        
        

    
`

export const NavMenu = styled.ul `
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li `
    height: 80px;
`

export const NavLinks = styled(Link) `
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%; 
    cursor: pointer;

    &.active {
        color: #15cdfc;
    }
`

