import React from "react";
import NavBar from "./HeroSectionComponents/NavBar";
import BackgroundCover from "./HeroSectionComponents/BackgroundCover";
import './HeroSection.css';

const HeroSection=()=>{
    return (
        <section className="hero-section">
            <NavBar/>
            <BackgroundCover/>
        </section>
    );
}

export default HeroSection;