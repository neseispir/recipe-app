import React from 'react'

import { Brand, Nav, Menu, MenuLink, Hamburger } from './Navbar.style'
import {GiHamburgerMenu } from "react-icons/gi"
import { useState } from 'react'
import "./Navbar.style"

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false)
  return (
     <Nav justify="space-between" wrap="wrap">
      <Brand to="/">
        <i>{"<Clarusway/>"}</i>
        <span>Recipe</span>
     </Brand>

     <Hamburger onClick={()=>setIsOpen(!isOpen)}>
      <GiHamburgerMenu/>
     </Hamburger>

      <Menu isOpen={isOpen} onClick={()=>setIsOpen(false)}>
       <MenuLink to="/" >Home</MenuLink>
       <MenuLink to="about">About</MenuLink>
       <MenuLink to="register">Register</MenuLink>
       <MenuLink to="logout" onClick={()=>sessionStorage.clear()}>Logout</MenuLink>
      </Menu>
      
    </Nav>
  )
}

export default Navbar