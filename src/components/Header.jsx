import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState } from "react";

const NavItem = ({ link, text}) => {
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

 const MenuItems = () => (
    <>
        <NavItem link="/" text="About" />
        <NavItem link="/" text="Features" />
        <NavItem link="/" text="Pricing" />
        <NavItem link="/" text="Testimonials" />
        <NavItem link="/" text="Help" />
        <div className="navbar-buttons">
        <NavbarButton text="Sign In" position="left"/>
        <NavbarButton text="Sign Up" position="right"/>
        </div>
    </>
 );

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