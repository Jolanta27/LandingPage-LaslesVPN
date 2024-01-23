import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


const NavItem = ({ link, text }) => {
    return (
        <li>
            <HashLink smooth to={`/${link}`}>{text}</HashLink>
        </li>
    );
};

 const NavbarButton = ({ text, position, link }) => { 
  return (
    <Link to={link} className={`navbar-button button-${position}`}>{text}</Link>
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
        <li><NavbarButton text="Sign In" position="left" link="/signin"/></li>
        <li><NavbarButton text="Sign Up" position="right" link="/signup"/></li>
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