import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState }  from "react";

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

 const HamburgerButton = ({isOpen, toggle}) => {
    return (
        <Hamburger toggled={isOpen} size= {20} toggle={toggle}/>
    )
 };

const Header = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
        <nav>
             <HamburgerButton isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>
             {isOpen && (
                <>
            <img src="logo.JPG" id="logo" alt="logo" />
            <ul className="navbar-list" onClick={() => setOpen((prev) => !prev)}>
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
             )}    
        </nav>
        </>
    )
} 
export default Header;