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

/* const HamburgerButton = ({isOpen, toggle}) => {
    return (
        <Hamburger toggled={isOpen} size= {25} toggle={toggle}/>
    )
 };*/

const Header = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    /*const renderMenu = isOpen ? (
        <> 
                <ul>
                <NavItem link="/" text="About" />
                <NavItem link="/" text="Features" />
                <NavItem link="/" text="Pricing" />
                <NavItem link="/" text="Testimonials" />
                <NavItem link="/" text="Help" />
                </ul>
                <div className="navbar-buttons">
                <NavbarButton text="Sign In" position="left"/>
                <NavbarButton text="Sign Up" position="right"/>
                </div>
                </>
*/
            return (
                <div >
                <nav className="navbar-list">
                    <img src="logo.JPG" id="logo" alt="logo" />
                    <div className="navbar-mobile navbar-laptop">
                    <Hamburger toggled={isOpen} size={25} toggle={toggleMenu} />
                    <ul className={`menu-items $ {isOpen ? "show" : ""}`}>
                    <NavItem link="/" text="About" />
                    <NavItem link="/" text="Features" />
                    <NavItem link="/" text="Pricing" />
                    <NavItem link="/" text="Testimonials" />
                    <NavItem link="/" text="Help" />
                    </ul>
                    <div className="navbar-buttons">
                    <NavbarButton text="Sign In" position="left"/>
                    <NavbarButton text="Sign Up" position="right"/>
                    </div>
                    </div>    
                </nav>
                </div>
            )
        } 
        export default Header;