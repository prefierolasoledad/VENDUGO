import React from "react";
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar= () =>{

    const navigate = useNavigate();

    const handelClickExploreMore= async ()=>{
        navigate(`/ExploreMore`);
    }

    return (
        <nav className="navbar">
            <div className="navbar-title">VENDUGO</div>
            <ul className="navbar-links">
                <li><p>Contact Us</p></li>
                <li onClick={()=>{handelClickExploreMore()}}><p>Our Services</p></li>
                <li onClick={()=>{handelClickExploreMore()}}><p>Our Product</p></li>
            </ul>
        </nav>
    )
}

export default NavBar;