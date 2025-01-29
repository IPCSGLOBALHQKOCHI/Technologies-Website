import "./App.css";
import CaseStudySection from "./Components/CaseStudy/CaseStudySection";
import Header from "./Components/Header";
import PageScroll from "./Pages/PageScroll";
// import PageScroll from "./Pages/PageScroll";

function App() {
  return (
    <div className="h-screen w-full bg-customBg ">
      <Header />
      <PageScroll/>
      {/* <CaseStudySection/> */}
    </div>
  );
}

export default App;
