import "./App.css";
import Header from "./Components/Header";
import PageScroll from "./Pages/PageScroll";

function App() {
  return (
    <div className="h-screen w-full bg-customBg ">
      <Header />
      <PageScroll/>
    </div>
  );
}

export default App;
