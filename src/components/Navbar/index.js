import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import {FaBars} from 'react-icons/fa'
import { VscThreeBars } from "react-icons/vsc";

const index = ({toggle}) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='./'>Jonathan Root</NavLogo>
        
        <MobileIcon onClick={toggle}>
          <VscThreeBars />
        </MobileIcon>
      </NavbarContainer>
    </Nav>
  )
}

export default index