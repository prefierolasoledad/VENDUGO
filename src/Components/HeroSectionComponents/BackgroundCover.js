import React from "react";
import './BackgroundCover.css'

const BackgroundCover=()=>{
    return (
        <section className="background-fill">
            <aside className="background-fill-heading">
                <h1>GET READY FOR AWESOME ADVENTURE</h1>
                <p>WE ARE A COMPANY THATS MAKE HIGH-QUALITY ALL-TERRAIN VEHICLES WITH AN EMPHASIS ON PERFORMANCE.</p>
                <button>SEE CATALOGUE</button>
            </aside>
            <aside className="background-naming">
                <div className="dots">
                    <span className="dot-active"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="horizontal-bar"></div>
                <p>TOYOTA HILUX</p>
            </aside>
        </section>
    )
}

export default BackgroundCover