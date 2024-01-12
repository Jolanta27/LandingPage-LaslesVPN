import React from "react";
import "./styles/Header.css";

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

const Header = () => {
    
    return (
        <nav>
         <img src="logo.JPG" id="logo" alt="logo" />
            <ul className="navbar-list">
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
        </nav>
    )
} 
export default Header;