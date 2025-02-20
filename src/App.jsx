import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import PrivacyPolicyPage from "./Pages/PrivacyPolicyPage.jsx";
import TermsOfUse from './Pages/TermsOfUse';
import CookieComponent from './Components/CookieComponent';

function App() {
  return (
    <div className="min-h-screen w-full bg-customBg">
      <Router>
        <MainContent />
      </Router>
    </div>
  );
}

function MainContent() {
  const location = useLocation();
  const hiddenPages = ["/privacy-policy","/terms-of-use","/connect-us"];
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/social-branding" element={<SocialBranding />} />
          <Route path="/experience-design" element={<ExperienceDesign />} />
          <Route path='/connect-us' element={<ConnectPage />} />
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/terms-of-use' element={<TermsOfUse />} />
        </Routes>
      </main>
      {!hiddenPages.includes(location.pathname) && <ConnectUs />}
      <Footer />
      <CookieComponent/> 
    </>
  );
}

export default App;
