import "./App.css";
import CaseStudySection from "./Components/CaseStudy/CaseStudySection";
import Header from "./Components/Header";
import HomeDownSection from "./Components/HomeDownSection";
import Mission from "./Components/Mission";
import Vision from "./Components/Vision";
import Home from "./Pages/Home";
import Appss from "./Pages/PageScroll";
// import PageScroll from "./Pages/PageScroll";

function App() {
  return (
    <div className="h-screen w-full bg-customBg">
      <Header />
      {/* <Home /> */}
      <Appss/>
      {/* <HomeDownSection />
      <Mission />
      <Vision /> */}
      {/* <CaseStudySection/> */}
    </div>
  );
}

export default App;
