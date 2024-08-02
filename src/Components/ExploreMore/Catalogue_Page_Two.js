import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import NissanRogue from '../../CarsCollection/NissanRogue.png';
import SubaruOutback from '../../CarsCollection/SubaruOutback.png';
import ToyotaCamry from '../../CarsCollection/ToyotaCamry.png';
import ToyotaCoralla from '../../CarsCollection/ToyotaCorolla.png';
import ToyotaHilux from '../../CarsCollection/backgroundHeroSection.png';
import ToyotaFortuner from '../../CarsCollection/backgroundHeroSectionTwo.png';
import ToyotaTaisor from '../../CarsCollection/backgroundHeroSectionThree.png';
import ToyotaFortunerLegender from '../../CarsCollection/backgroundHeroSectionFour.png';
import './Catalogue.css';

const CataloguePageTwo=()=>{

    const [showPopUpForRentingCar,setShowPopUpForRentingCar]=useState(false);
    const [selectedCarName,setSelectedCarName]=useState('');
    const [selectedCarImage,setSelectedCarImage]=useState('');
    const [selectedCarRating,setSelectedCarRating]=useState('');
    const [selectedCarRentingPrice,setSelectedCarRentingPrice]=useState('');
    const [width, setWidth]=useState(window.innerWidth);

    const catalogue=[
        {id:"NissanRogue", imageUrl:NissanRogue, name:"Nissan Rogue",rating:'3.9', price:'85$/Day'},
        {id:'SubaruOutback', imageUrl:SubaruOutback,name:"Subaru Outback",rating:'4.5', price:'96$/Day'},
        {id:'ToyotaCamry', imageUrl:ToyotaCamry, name:"Toyota Camry",rating:'4.2', price:'93$/Day'},
        {id:"ToyotaCoralla", imageUrl:ToyotaCoralla, name:"Toyota Coralla",rating:'4.9', price:'130$/Day'},
        {id:"ToyotaHilux", imageUrl:ToyotaHilux, name:"Toyota Hilux",rating:'5.0', price:'150$/Day'},
        {id:"ToyotaFortuner", imageUrl:ToyotaFortuner, name:"Toyota Fortuner",rating:'4.0', price:'90$/Day'},
        {id:"ToyotaTaisor", imageUrl:ToyotaTaisor, name:"Toyota Taisor",rating:'4.7', price:'144$/Day'},
        {id:"ToyotaFortunerLegender", imageUrl:ToyotaFortunerLegender, name:"Fortuner Legender",rating:'4.6', price:'100$/Day'}
    ]
    const catalogueNames=[
        {value:"NissanRogue", label:"Nissan Rogue"},
        {value:'SubaruOutback', label:"Subaru Outback"},
        {value:'ToyotaCamry',  label:"Toyota Camry"},
        {value:"ToyotaCoralla",  label:"Toyota Coralla"},
        {value:"ToyotaHilux", label:"Toyota Hilux"},
        {value:"ToyotaFortuner",  label:"Toyota Fortuner"},
        {value:"ToyotaTaisor", label:"Toyota Taisor"},
        {value:"ToyotaFortunerLegender",  label:"Toyota Fortuner Legender"}
    ]
    const [selectedCar,setSelectedCar]=useState('');


    const handleCarChange=(selectedOption)=>{
        setSelectedCar(selectedOption);
    }

    const togglePopUpForRentingCar=(name, image,rating,price)=>{
        setSelectedCarImage(image);
        setSelectedCarName(name);
        setSelectedCarRating(rating);
        setSelectedCarRentingPrice(price);
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
        navigate(`/ExploreMore`);
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
                    <button onClick={()=>{togglePopUpForRentingCar(car.name,car.imageUrl,car.rating,car.price)}} className='exploreButtonforCatalogue'>Rent Now</button>
                    </div>
                ))
                )
            }
            </div>
            <div class="pagination">
                <span class="page-info">Page 2 of 2</span>
                <p onClick={()=>{goToPageTwo()}} class="prev" aria-disabled="false">{"<< Previous"}</p>
                <p style={{padding:' 0 10px'}}>|</p>
                <p class="next" aria-disabled="true">{"Next >>"}</p>
            </div>
            {showPopUpForRentingCar &&(
                <div className="popup-background-box-for-renting-car">
                    <div className="pop-up-for-renting-card">
                        <div style={{backgroundImage:`url(${selectedCarImage})`, backgroundSize:'cover',backgroundPosition:'center'}} className="pop-up-for-renting-car-cover">
                            <div className="close-pop-up-car-renting"><p onClick={()=>{togglePopUpForRentingCar('')}} className="close-ppup-window">X</p></div>
                            </div>
                            <div className="content-for-renting">
                                <aside>
                                    <h1>{selectedCarName}</h1>
                                    <p id="rating">{`Rating: ${selectedCarRating}`} </p>
                                    <p id="price-for-renting-car">{`Price: ${selectedCarRentingPrice}`}</p>
                                    <button className="make-payment-button">MAKE PAYMENT</button>
                                </aside>
                                
                            </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default CataloguePageTwo;