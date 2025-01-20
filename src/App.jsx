import "./App.css";
import Header from "./Components/Header";
import HomeDownSection from "./Components/HomeDownSection";
import Mission from "./Components/Mission";
import Vision from "./Components/Vision";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="h-screen w-full bg-customBg">
      <Header/>
      <Home/>
      <HomeDownSection/>
      <Mission/>
      <Vision/>
    </div>
  );
}

export default App;
