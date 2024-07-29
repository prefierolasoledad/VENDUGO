import React from "react";
import './NavBar.css';

const NavBar= () =>{
    return (
        <nav className="navbar">
            <div className="navbar-title">VENDUGO</div>
            <ul className="navbar-links">
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#products">Our Product</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;