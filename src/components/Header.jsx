import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState } from "react";


const NavItem = ({ link, text }) => {
    return (
        <li>
            <a href={link}>{text}</a>
        </li>
    );
};

 const NavbarButton = ({ text, position}) => { 
  return (
    <button className={`navbar-button button-${position}`}>{text}</button>
  )
 }


 const MenuItems = () => {

    return (
    <>
        <NavItem link="#about" text="About" />
        <NavItem link="#features" text="Features" />
        <NavItem link="#pricing" text="Pricing" />
        <NavItem link="#testimonials" text="Testimonials" />
        <NavItem link="#footer" text="Help" />
        <div className="navbar-buttons">
        <NavbarButton text="Sign In" position="left"/>
        <NavbarButton text="Sign Up" position="right"/>
        </div>
    </>
 );
    };
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    
           return (
                <nav className="menu-items">
                    <img src="logo.JPG" id="logo" alt="logo" />
                          <Hamburger toggled={isOpen} size={25} toggle={setOpen}/>
                          <ul className={isOpen ? "open" : ""}>
                     <MenuItems />
                     </ul> 
                </nav>
            );
        };
        export default Header;