import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import './App.css';
import HomePage from './Components/Home';
import SeeCatalogue from './Components/SeeCatalogue';
import SeeCataloguePageTwo from './Components/SeeCataloguePageTwo';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/ExploreMore" element={<SeeCatalogue />} />
        <Route path="/ExploreMore_Page_Two" element={<SeeCataloguePageTwo/>}/>
      </Routes>
    </Router>
  );
}

export default App;
