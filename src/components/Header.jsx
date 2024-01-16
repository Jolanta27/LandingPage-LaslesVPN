import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState, useEffect } from "react";

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
    const [isOpen, setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

        const toggleMenu = () => {
            setOpen(!isOpen);
        };

           return (
                <div>
                <nav className="navbar-list">
                    <img src="logo.JPG" id="logo" alt="logo" />
                    {isMobile ? (
                   <div className="navbar-mobile navbar-laptop">
                    <Hamburger toggled={isOpen} size={25} toggle={toggleMenu} />
                    {isOpen && (
                        <ul className={`menu-items $ {isOpen ? "show" : ""}`}>
                        <NavItem link="/" text="About" />
                        <NavItem link="/" text="Features" />
                        <NavItem link="/" text="Pricing" />
                        <NavItem link="/" text="Testimonials" />
                        <NavItem link="/" text="Help" />
                        <NavbarButton text="Sign In" position="left"/>
                        <NavbarButton text="Sign Up" position="right"/>
                        </ul>
                     )}
                        </div> 
                    ) : (
                        <ul className="menu-items">
                        <NavItem link="/" text="About" />
                        <NavItem link="/" text="Features" />
                        <NavItem link="/" text="Pricing" />
                        <NavItem link="/" text="Testimonials" />
                        <NavItem link="/" text="Help" />
                        <NavbarButton text="Sign In" position="left"/>
                        <NavbarButton text="Sign Up" position="right"/>
                        </ul>
                    )}
                </nav>
                </div>
            )
        } 
        export default Header;