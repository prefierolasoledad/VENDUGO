import React, { useState } from "react";
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

    const catalogue=[
        {id:"NissanRogue", imageUrl:NissanRogue, name:"Nissan Rogue"},
        {id:'SubaruOutback', imageUrl:SubaruOutback,name:"Subaru Outback"},
        {id:'ToyotaCamry', imageUrl:ToyotaCamry, name:"Toyota Camry"},
        {id:"ToyotaCoralla", imageUrl:ToyotaCoralla, name:"Toyota Coralla"},
        {id:"ToyotaHilux", imageUrl:ToyotaHilux, name:"Toyota Hilux"},
        {id:"ToyotaFortuner", imageUrl:ToyotaFortuner, name:"Toyota Fortuner"},
        {id:"ToyotaTaisor", imageUrl:ToyotaTaisor, name:"Toyota Taisor"},
        {id:"ToyotaFortunerLegender", imageUrl:ToyotaFortunerLegender, name:"Toyota Fortuner Legender"}
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

    const togglePopUpForRentingCar=(name, image)=>{
        setSelectedCarImage(image);
        setSelectedCarName(name);
        setShowPopUpForRentingCar(!showPopUpForRentingCar);
    }

    const navigate=useNavigate();

    const goToPageTwo= async ()=>{
        navigate(`/ExploreMore`);
    }

    return(
        <section className="catalogue-section">
            <h1>CAR CATALOGUE</h1>
            <div className='inputCountry' style={{ width: '500px' }}>
            <Select 
                placeholder="Select Car"
                value={selectedCar}
                onChange={handleCarChange}
                options={catalogueNames}
            />
            </div>
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
                <span class="page-info">Page 2 of 2</span>
                <p onClick={()=>{goToPageTwo()}} class="prev" aria-disabled="false">{"<< Previous"}</p>
                <p style={{padding:' 0 10px'}}>|</p>
                <p class="next" aria-disabled="true">{"Next >>"}</p>
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

export default CataloguePageTwo;