import CataloguePageTwo from "./ExploreMore/Catalogue_Page_Two";
import Footer from "./footer";
import NavBar from "./HeroSectionComponents/NavBar"
import './SeeCatalogue.css'

const SeeCataloguePageTwo=()=>{
    return (
        <section className="see-catalogue">
            <NavBar/>
            <CataloguePageTwo/>
            <Footer alterMargin={true}/>
        </section>
    )
}

export default SeeCataloguePageTwo;