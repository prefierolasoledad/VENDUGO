import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import HondaAccord from '../../CarsCollection/HondaAccord.png';
import HondaCivic from '../../CarsCollection/HondaCivic.png';
import HyundaiKona from '../../CarsCollection/HyundaiKona.png';
import HyundaiSonata from '../../CarsCollection/HyundaiSonata.png';
import KiaK5 from '../../CarsCollection/KiaK5.png';
import KiaSeltos from '../../CarsCollection/KiaSeltos.png';
import Mazda3 from '../../CarsCollection/Mazda3.png';
import Mazda6 from '../../CarsCollection/Mazda6.png';

import './Catalogue.css'

const Catalogue=()=>{

    const [showPopUpForRentingCar,setShowPopUpForRentingCar]=useState(false);
    const [selectedCarName,setSelectedCarName]=useState('');
    const [selectedCarImage,setSelectedCarImage]=useState('');
    const [width, setWidth]=useState(window.innerWidth);

    const catalogue=[
        {id:"HondaAccord", imageUrl:HondaAccord, name:"Honda Accord"},
        {id:'HondaCivic', imageUrl:HondaCivic,name:"Honda Civic"},
        {id:'HyundaiKona', imageUrl:HyundaiKona, name:"Hyundai Kona"},
        {id:"HyundaiSonata", imageUrl:HyundaiSonata, name:"Hyundai Sonata"},
        {id:"KiaK5", imageUrl:KiaK5, name:"Kia K5"},
        {id:"KiaSeltos", imageUrl:KiaSeltos, name:"Kia Seltos"},
        {id:"Mazda3", imageUrl:Mazda3, name:"Mazda 3"},
        {id:"Mazda6", imageUrl:Mazda6, name:"Mazda 6"}
    ]
    const catalogueNames=[
        {value:"HondaAccord", label:"Honda Accord"},
        {value:'HondaCivic', label:"Honda Civic"},
        {value:'HyundaiKona',  label:"Hyundai Kona"},
        {value:"HyundaiSonata",  label:"Hyundai Sonata"},
        {value:"KiaK5", label:"Kia K5"},
        {value:"KiaSeltos",  label:"Kia Seltos"},
        {value:"Mazda3", label:"Mazda 3"},
        {value:"Mazda6",  label:"Mazda 6"}
    ]
    const [selectedCar,setSelectedCar]=useState('');


    const handleCarChange=(selectedOption)=>{
        setSelectedCar(selectedOption);
    }

    const togglePopUpForRentingCar=(name, image)=>{
        setSelectedCarImage(image);
        setSelectedCarName(name);
        setShowPopUpForRentingCar(!showPopUpForRentingCar);
    }

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getWidth = () => {
        if (width > 1200) return '500px';
        if (width > 768) return '400px';
        return '300px';
    };

    const navigate=useNavigate();

    const goToPageTwo= async ()=>{
        navigate(`/ExploreMore_Page_Two`);
    }

    return(
        <section className="catalogue-section">
            <h1>CAR CATALOGUE</h1>
            <Select 
                placeholder="Select Car"
                value={selectedCar}
                onChange={handleCarChange}
                options={catalogueNames}
                styles={{
                    container:(provided)=>({
                        ...provided,
                        width:getWidth(),
                    })
                }}
            />
            <div className='catalogue'>
            {(
                catalogue.map(car => (
                    <div key={car.id} className='car-catalogue' style={{display:selectedCar? (car.name===selectedCar.label?'flex':'none'):'flex'}}>
                    <div className='imageSectionofCar'>
                        <img src={car.imageUrl} alt={car.name}/>
                    </div>
                    <h2>{car.name}</h2>
                    <button onClick={()=>{togglePopUpForRentingCar(car.name,car.imageUrl)}} className='exploreButtonforCatalogue'>Rent Now</button>
                    </div>
                ))
                )
            }
            </div>
            <div class="pagination">
                <span class="page-info">Page 1 of 2</span>
                <p class="prev" aria-disabled="true">{"<< Previous"}</p>
                <p style={{padding:' 0 10px'}}>|</p>
                <p onClick={()=>{goToPageTwo()}} class="next" aria-disabled="false">{"Next >>"}</p>
            </div>
            {showPopUpForRentingCar &&(
                <div className="popup-background-box-for-renting-car">
                    <div style={{backgroundImage:`url(${selectedCarImage})`, backgroundSize:'cover'}} className="pop-up-for-renting-card">
                        <div className="pop-up-for-renting-car-cover">
                            <div style={{width:'100%',height:'10%'}}><p onClick={()=>{togglePopUpForRentingCar('')}} className="close-ppup-window">X</p></div>
                            <div className="content-for-renting">
                                <aside>
                                    <h1>{selectedCarName}</h1>
                                    <p  id="benifits-for-car">
                                        The {selectedCarName} offers excellent performance, comfort, and safety. It features a powerful engine, efficient fuel consumption,
                                        and a stylish design. Inside, it provides advanced technology and comfort.
                                    </p>
                                    <p id="rating">Rating: 4.5 </p>
                                    <p id="price-for-renting-car">Price: 100$/day</p>
                                    <button className="make-payment-button">MAKE PAYMENT</button>
                                </aside>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Catalogue;