import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar">
         <img src="logo.JPG" id="logo" alt="logo" />
            <ul className="navbar-list">
            <li><a href="/">About</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Help</a></li>
            </ul>
            <div className="navbar-buttons">
            <button className="navbar-botton botton-left">Sign in</button>
            <button className="navbar-botton botton-right">Sign up</button>
            </div>
        </nav>
    )
} 
export default Header;