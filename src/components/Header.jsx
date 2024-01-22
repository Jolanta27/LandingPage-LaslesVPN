import React from "react";
import "./styles/Header.css";
import Hamburger from 'hamburger-react'
import { useState, useEffect, useRef} from "react";

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
    const ref = useRef();
    
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

        useEffect(() => {
            const handler = (event) => {
                if (isOpen && ref.current && !ref.current.contains(event.target)
                ) {
                    setOpen(false);
                }
            };
            document.addEventListener('mousedown', handler);
            return () => { document.removeEventListener('mousedown', handler);
        };
    }, [isOpen]);

           return (
                <div>
                <nav ref={ref} className={isOpen ? "menu-items-open" : "menu-items"}>
                    <img src="logo.JPG" id="logo" alt="logo" />
                    {isMobile ? (
                          <div className="navbar-mobile navbar-laptop">
                          <Hamburger toggled={isOpen} size={25} toggle={toggleMenu} onClick={() => setOpen((prev) => !prev)}/>
                          {isOpen && (
                              <ul className={`menu-items $ {isOpen ? "show" : ""}`}>
                              <NavItem className ="mobile-link" link="/" text="About" />
                              <NavItem link="/" text="Features" />
                              <NavItem link="/" text="Pricing" />
                              <NavItem link="/" text="Testimonials" />
                              <NavItem link="/" text="Help" />
                              <div className="navbar-buttons">
                              <NavbarButton  className="navbar-button" text="Sign In" position="left"/>
                              <NavbarButton className="navbar-button" text="Sign Up" position="right"/>
                              </div>
                              </ul>
                           )}
                              </div> 
                    ) : (
                        <ul className="menu-items-open">
                        <NavItem link="/" text="About" />
                        <NavItem link="/" text="Features" />
                        <NavItem link="/" text="Pricing" />
                        <NavItem link="/" text="Testimonials" />
                        <NavItem link="/" text="Help" />
                        <NavbarButton className="navbar-buttons" text="Sign In" position="left"/>
                        <NavbarButton className="navbar-buttons" text="Sign Up" position="right"/>
                        </ul>
                    )}
                </nav>
                </div>
            )
        } 
        export default Header;