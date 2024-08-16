import React from "react";
import { useNavigate } from "react-router-dom";
import PartTwo from "./PartTwo";
import PartThree from "./PartThree";
import PartFour from "./PartFour";
import Footer from "../footer";
import './PartOne.css'

const PartOne=React.forwardRef(({ top }, ref) =>{
    const navigate=useNavigate();

    const exploreMore=async()=>{
        navigate(`/ExploreMore`);
    }
    return(
        <section ref={ref} className="part-one" style={{ top }}>
            <div className="part-one-one">
                <aside className="left">
                <h2>
                    HIGH-QUALITY ALL-TERRAIN VEHICLES WITH AN EMPHASIS ON PERFORMANCE
                </h2>
                </aside>
                <aside className="right">
                    <p>
                        WE PROVIDE CARS FOR ANY OBSTACLE YOU WANT TO FACE, FROM ARID DESERTS TO ICY MOUNTAINS. WE ARE READY TO PREPARE THE BEST FOR YOU
                    </p>
                </aside>
            </div>
            <div className="part-one-two">
                <aside className="left-image"/>
                <aside className="right-text-image">
                    <h2>
                        WITH THE RIGHT VEHICLE YOU CAN EXPLORE AND ACHIEVE YOUR FREEDOM WHERE YOU WANT
                    </h2>
                    <p>
                        WE PROVIDE OFFROAD CAR TO RENT. IF YOU WANT TO EXPLORE THE WORLD, GET LOST IN NATURE,
                        RIDE DEEP INTO THE DESERT OR JUST WANT TO DRIVE LIKE A MANIAC THEN OUR OFF-
                    </p>
                    <a href="#contact">CONTACT US</a>
                </aside>
            </div>
            <div className="part-one-three">
                <aside className="left-text-image">
                    <h2>DASHING, TOUCH AND RELIABLE IS THEIR FORTE</h2>
                    <p>
                        DRIVING A 4X4 CAR IN THE BEAUTIFUL ROADS OFFROAD RENTAL IS AN EXCITING EXPERIENCE AND AN OPPORTUNITY TO DRIVE A 4X4 CAR IN THE BEAUTIFUL ROADS OF TURKEY.
                    </p>
                    <a href="#contact">CONTACT US</a>
                </aside>
                <aside className="right-image"/>
            </div>
            <div className="part-one-four">
                <aside className="left-image-four"/>
                <aside className="right-text-image">
                    <h2>
                        COMBINE STRENGTH AND COURAGE ON THE TERRAIN YOU  WILL FACE
                    </h2>
                    <p>
                        WE PROVIDE OFFROAD CAR TO RENT FOR YOUR TRIP. IT CAN BE USEFUL IN ANY CIRCUMSTANCES YOU WILL HAVE, FROM DRIVING ON THE ASPHALT
                    </p>
                    <button onClick={()=>{exploreMore()}}>SEE CATALOGUE</button>
                </aside>
            </div>
            <PartTwo/>
            <PartThree/>
            <PartFour/>
            <Footer alterMargin={true}/>
        </section>
    )
});

export default PartOne;