import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Branding from './Pages/ServicesPages/Branding';
import Technology from './Pages/ServicesPages/Technology';
import DigitalMarketing from './Pages/ServicesPages/DigitalMarketing';
import SocialBranding from './Pages/ServicesPages/SocialBranding';
import ExperienceDesign from './Pages/ServicesPages/ExperienceDesign';
import Footer from './Components/Footer';
import ConnectUs from './Components/ConnectUs';
import ConnectPage from './Pages/ConnectPage';

function App() {
  return (
    <div className="min-h-screen w-full bg-customBg">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/branding" element={<Branding />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/social-branding" element={<SocialBranding />} />
            <Route path="/experience-design" element={<ExperienceDesign />} />
            <Route path='/connect-us' element={<ConnectPage/>}/>
          </Routes>
        </main>
        <ConnectUs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
