import React from "react";
import { useNavigate } from "react-router-dom";
import './PartFour.css';

const PartFour=()=>{
    const navigate=useNavigate();

    const exploreMore=async()=>{
        navigate('/ExploreMore');
    }
    return(
        <section className="part-four">
            <div className="part-four-one">
                <aside className="part-four-left">
                <h2>
                    LIVE THE WAY YOU DREAM, EXPLORE AS MUCH AS YOU WANT
                </h2>
                </aside>
                <aside className="part-four-right">
                    <p>
                        WITH VEHICLE RECOMMENDATIONS AND ALSO A CHOICE OF TOURIST DESTINATIONS, YOU ONLY HAVE TO PREPARE MENTALLY AND YOURSELF BECAUSE YOU HAVE 
                        THE CONVENIENCE TO LIVE YOUR DREAM NOW
                    </p>
                </aside>
            </div>
            <div className="image-section-part-four">
                <div id="part-four-first-image">

                </div>
                <div id="part-four-second-image">

                </div>
            </div>
            <button onClick={()=>{exploreMore()}}>EXPLORE MORE</button>
        </section>
    )
}

export default PartFour;