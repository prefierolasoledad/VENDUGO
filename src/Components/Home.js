import React, { useRef, useState, useEffect } from 'react';
import HeroSection from "./HeroSection";
import PageTwo from "./PageTwo";

const HomePage=()=>{

    const heroSectionRef = useRef(null);
    const [partOneTop, setPartOneTop] = useState('0px');

    useEffect(() => {
        const updateTopPosition = () => {
            if (heroSectionRef.current) {
                const heroSectionHeight = heroSectionRef.current.offsetHeight;
                const topPosition = heroSectionHeight;
                setPartOneTop(`${topPosition}px`);
            }
        };

        updateTopPosition();
        window.addEventListener('resize', updateTopPosition);

        return () => window.removeEventListener('resize', updateTopPosition);
    }, []);

    return(
        <div>
            <HeroSection ref={heroSectionRef}/>
            <PageTwo partOneTop={partOneTop}/>
        </div>
    );
}

export default HomePage