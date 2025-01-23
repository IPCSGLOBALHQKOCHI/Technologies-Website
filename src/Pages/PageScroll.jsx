import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section1 from "./Section1";
import Section2 from "./Section2";

const sections = [<Section1 />, <Section2 />]; // Add more sections here

const PageScroll = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll Event Handler
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentIndex < sections.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (event.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [currentIndex]);

  return (
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute w-full h-full flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        >
          {sections[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageScroll;
