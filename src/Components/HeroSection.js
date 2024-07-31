import React,{useState,useEffect} from "react";
import NavBar from "./HeroSectionComponents/NavBar";
import BackgroundCover from "./HeroSectionComponents/BackgroundCover";
import './HeroSection.css';

const HeroSection=()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images=[
        "TOYOTA_HILUX",
        "TOYOTA_FORTUNER",
        "TOYOTA_TAISOR",
        "TOYOTA_FORTUNER_LEGENDER"
    ]
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <section id={images[currentImageIndex]} className="hero-section">
            <NavBar/>
            <BackgroundCover name={images[currentImageIndex]}/>
        </section>
    );
}

export default HeroSection;