import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import SignUpForm from "./SignUp";


const NavItem = ({ link, text }) => {
    return (
        <li>
            <HashLink smooth to={`/${link}`}>{text}</HashLink>
        </li>
    );
};

 const NavbarButton = ({ text, position, link, onClick }) => { 
  return (
    <Link to={link} className={`navbar-button button-${position}`} onClick={onClick}>{text}</Link>
  )
 }


 const MenuItems = ({ setShowForm }) => {
    return (
    <>
        <NavItem link="#about" text="About" />
        <NavItem link="#features" text="Features" />
        <NavItem link="#pricing" text="Pricing" />
        <NavItem link="#testimonials" text="Testimonials" />
        <NavItem link="#footer" text="Help" />
        <div className="navbar-buttons">
        <li><NavbarButton text="Sign In" position="left" link="/signin"/></li>
        <li><NavbarButton onClick={() => setShowForm(true)} text="Sign Up" position="right" link="/signup"/></li>
        </div>
    </>
 );
    };
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);

           return (
                <nav className="menu-items">
                    <img src="logo.JPG" id="logo" alt="logo" />
                          <Hamburger 
                          toggled={isOpen} 
                          size={25} 
                          toggle={() => {
                            setOpen(true);
                            setTimeout(() => {
                                setOpen(false);
                            }, 2000);
                          }

                          
                          
                          }/>
                          <ul className={isOpen ? "open" : ""}>
                     <MenuItems setShowForm={setShowForm}/>
                     </ul> 
                     {showForm && <SignUpForm onClose={() => setShowForm(false)} /> }
                </nav>
            );
        };
        export default Header;