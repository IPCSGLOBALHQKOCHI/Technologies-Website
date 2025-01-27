import { useEffect, useRef, useState } from "react";
import HeroSection from "../Components/Home/HeroSection";
import HeroDownSection from "../Components/HomeDownSection";
import Mission from "../Components/Mission";
import Vision from "../Components/Vision";

export default function Appss() {
  const sections = useRef([]); // Store section references
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false); 

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault(); 
      if (isScrolling.current) return; 

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 600); 

      if (event.deltaY > 0) {
        if (currentIndex < sections.current.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentIndex((prevIndex) => prevIndex - 1);
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (sections.current[currentIndex]) {
      requestAnimationFrame(() => {
        sections.current[currentIndex].scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [currentIndex]);

  return (
    <div className="App">
      <HeroSection ref={(el) => (sections.current[0] = el)} />
      <HeroDownSection ref={(el) => (sections.current[1] = el)} />
      <Mission ref={(el) => (sections.current[2] = el)} />
      <Vision ref={(el) => (sections.current[3] = el)} />
    </div>
  );
}
