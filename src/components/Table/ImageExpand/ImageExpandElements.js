import styled from "styled-components";
import {NavLink as Link} from 'react-router-dom'
import {Link as LinkR} from "react-router-dom";

export const ImageContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: white;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({imageOpen}) => imageOpen ? '100%' : '0'};
    top: ${({imageOpen}) => imageOpen ? '0' : '-100%'};
    
`