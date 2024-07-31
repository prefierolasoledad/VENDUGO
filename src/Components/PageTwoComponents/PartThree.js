import React,{useState,useEffect} from "react";
import './PartThree.css';

const PartThree=()=>{
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images=[
        "slideOne",
        "slideTwo",
        "slideThree",
        "slideFour"
    ]
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
    }, [images.length]);
    return(
        <section className="part-three">
            <div className="text-section-part-three">
                <h2>EXPLORE AS YOU LIKE</h2>
                <p>THE WORLD IS VAST, SO WHAT ARE YOU WAITING FOR, LET'S EXPLORE AND DISCOVER VARIOUS KINDS OF WONDERS</p>
                <p>ON THIS PLANET</p>
            </div>
            <div id={images[currentImageIndex]} className="slide-show-section-part-four">
                <div className="dots-horizontal">
                    <span id={currentImageIndex===0?"dot-active-horizontal":""} className="dot-horizontal"></span>
                    <span id={currentImageIndex===1?"dot-active-horizontal":""} className="dot-horizontal"></span>
                    <span id={currentImageIndex===2?"dot-active-horizontal":""} className="dot-horizontal"></span>
                    <span id={currentImageIndex===3?"dot-active-horizontal":""} className="dot-horizontal"></span>
                </div>
            </div>
        </section>
    )
}

export default PartThree;