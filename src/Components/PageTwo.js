import React from "react";
import PartOne from "./PageTwoComponents/PartOne";
import './PageTwo.css';
import PartTwo from "./PageTwoComponents/PartTwo";
import PartThree from "./PageTwoComponents/PartThree";
import PartFour from "./PageTwoComponents/PartFour";
import Footer from "./footer";

const PageTwo=()=>{
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
            <PartOne/>
            <PartTwo/>
            <PartThree/>
            <PartFour/>
            <Footer alterMargin={false}/>
        </section>
    )
}

export default PageTwo;