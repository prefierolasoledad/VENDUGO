import React from "react";
import { useNavigate } from 'react-router-dom';
import './BackgroundCover.css'

const BackgroundCover=({name})=>{

    const navigate = useNavigate();
    
    const handelClickExploreMore= async ()=>{
        navigate(`/ExploreMore`);
    }

    return (
        <section className="background-fill">
            <aside className="background-fill-heading">
                <h1>GET READY FOR AWESOME ADVENTURE</h1>
                <p>WE ARE A COMPANY THATS MAKE HIGH-QUALITY ALL-TERRAIN VEHICLES WITH AN EMPHASIS ON PERFORMANCE.</p>
                <button onClick={()=>{handelClickExploreMore()}}>SEE CATALOGUE</button>
            </aside>
            <aside className="background-naming">
                <div className="dots">
                    <span id={(name==="TOYOTA_HILUX")?"dot-active":""} className="dot"></span>
                    <span id={(name==="TOYOTA_FORTUNER")?"dot-active":""} className="dot"></span>
                    <span id={(name==="TOYOTA_TAISOR")?"dot-active":""} className="dot"></span>
                    <span id={(name==="TOYOTA_FORTUNER_LEGENDER")?"dot-active":""} className="dot"></span>
                </div>
                <div className="horizontal-bar"></div>
                
                <p>{name.replace(/_/g, ' ')}</p>
            </aside>
        </section>
    )
}

export default BackgroundCover