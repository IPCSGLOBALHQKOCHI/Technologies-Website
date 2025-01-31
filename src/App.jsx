import "./App.css";
import Header from "./Components/Header";
import PageScroll from "./Pages/PageScroll";
import Services from "./Pages/Services";

function App() {
  return (
    <div className="h-screen w-full bg-customBg ">
      <Header />
      <PageScroll/>
      {/* <Services/> */}
    </div>
  );
}

export default App;
