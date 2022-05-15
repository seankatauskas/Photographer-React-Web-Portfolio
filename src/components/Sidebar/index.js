import React from 'react'
import {SidebarContainer, Icon, SidebarLink, SidebarWrapper, SidebarMenu, NavLogo} from './SidebarElements'
import {FaTimes} from 'react-icons/fa'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <SidebarWrapper>
        <NavLogo to='./' onClick={toggle}>Jonathan Root</NavLogo>
        <Icon onClick={toggle}>
            <FaTimes />
        </Icon>
      </SidebarWrapper>

        <SidebarMenu>
           
        <SidebarLink to="./about" activeStyle onClick={toggle}>
            ABOUT
          </SidebarLink>
          <SidebarLink to="./gallery" activeStyle onClick={toggle}>
            GALLERY
          </SidebarLink>
          <SidebarLink to="./press" activeStyle onClick={toggle}>
            PRESS
          </SidebarLink>
          <SidebarLink to="./contact" activeStyle onClick={toggle}>
            CONTACT
          </SidebarLink>
            
        </SidebarMenu>
        

    </SidebarContainer>
  )
}

export default Sidebar