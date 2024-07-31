import Catalogue from "./ExploreMore/Catalogue";
import Footer from "./footer";
import NavBar from "./HeroSectionComponents/NavBar";
import './SeeCatalogue.css';

const SeeCatalogue=()=>{
    return (
        <section className="see-catalogue">
            <NavBar/>
            <Catalogue/>
            <Footer alterMargin={true}/>
        </section>
    )
}

export default SeeCatalogue;