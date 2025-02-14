import React, { useState, useRef, useEffect } from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import HeroDownSection from "../Components/HomeDownSection";
import Mission from "../Components/Mission";
import Vision from "../Components/Vision";
import CaseStudySection from "../Components/CaseStudy/CaseStudySection";
import Services from "./Services";
import ClientSlides from "../Components/Clients/ClientSlides";
import ClientReviews from "../Components/ClientReviews";

export default function Home() {
  const sections = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollingMode, setScrollingMode] = useState("controlled");
  const isScrolling = useRef(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect mobile on initial render

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect for mobile

    const caseStudySection = sections.current[4];

    const checkForScrollMode = () => {
      const rect = caseStudySection.getBoundingClientRect();
      
      // Enable normal scroll when reaching CaseStudySection
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        setScrollingMode("normal");
      } 
      // Switch back to controlled scrolling when going back up
      else if (window.scrollY < sections.current[3].offsetTop) {
        setScrollingMode("controlled");
      }
    };

    window.addEventListener("scroll", checkForScrollMode);
    return () => window.removeEventListener("scroll", checkForScrollMode);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect for mobile

    const handleScroll = (event) => {
      if (scrollingMode === "normal") return;

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
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex, scrollingMode, isMobile]);

  useEffect(() => {
    if (isMobile) return; // Disable scroll effect for mobile

    if (sections.current[currentIndex]) {
      sections.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [currentIndex, isMobile]);

  return (
    <div className="">
      <HeroSection ref={(el) => (sections.current[0] = el)} />
      <HeroDownSection ref={(el) => (sections.current[1] = el)} />
      <Mission ref={(el) => (sections.current[2] = el)} />
      <Vision ref={(el) => (sections.current[3] = el)} />
      <CaseStudySection ref={(el) => (sections.current[4] = el)} />
      {/* <Services /> */}
      {/* <ClientSlides/> */}
      {/* <ClientReviews/> */}
    </div>
  );
}