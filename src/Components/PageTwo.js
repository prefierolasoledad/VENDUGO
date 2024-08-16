import React, { useRef, useState, useEffect } from "react";
import PartOne from "./PageTwoComponents/PartOne";
import './PageTwo.css';

const PageTwo=({ partOneTop })=>{
    const partOneRef = useRef(null);
    const [partTwoTop, setPartTwoTop] = useState('0px');

    useEffect(() => {
        const updateTopPosition = () => {
            if (partOneRef.current) {
                const heroSectionHeight = partOneRef.current.offsetHeight;
                const topPosition = heroSectionHeight;
                setPartTwoTop(`${topPosition}px`);
                console.log(partTwoTop);
            }
        };

        updateTopPosition();
        window.addEventListener('resize', updateTopPosition);

        return () => window.removeEventListener('resize', updateTopPosition);
    }, [partTwoTop]);


    return (
        <section className="page-two-background-content">
            <div className="right-side-page-two">
                <h1 className="right-side-background-text">BEDLAM INC.</h1>
            </div>
            <div className="left-side-page-two">
                <h1 className="left-side-background-text">BEDLAM INC.</h1>
            </div>
            <div className="right-side-page-two-two">
                <h1 className="right-side-background-text">BEDLAM INC.</h1>
            </div>
            <div className="left-side-page-two-two">
                <h1 className="left-side-background-text">BEDLAM INC.</h1>
            </div>
            <PartOne ref={partOneRef} top={partOneTop} />
        </section>
    )
}

export default PageTwo;