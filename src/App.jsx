import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isOverlayFading, setIsOverlayFading] = useState(false);

  useEffect(() => {
    const fadeTimer = window.setTimeout(() => setIsOverlayFading(true), 250);
    const removeTimer = window.setTimeout(
      () => setIsOverlayVisible(false),
      950
    );

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      {isOverlayVisible && (
        <div
          className={`page-intro-overlay ${isOverlayFading ? "page-intro-overlay--fade" : ""
            }`}
          aria-hidden="true"
        />
      )}
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home isOverlayFading={isOverlayFading} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
