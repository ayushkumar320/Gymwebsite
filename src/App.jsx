import {useMemo, useState, useEffect} from "react";
import TopBanner from "./components/TopBanner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AlternatingSection from "./components/AlternatingSection";
import DietServicesBanner from "./components/DietServicesBanner";
import GymAccessBanner from "./components/GymAccessBanner";
import Footer from "./components/Footer";
import image1 from "./assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg";
import image2 from "./assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg";
import image3 from "./assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg";
import image4 from "./assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg";

function App() {
  // Memoize alternating sections data to prevent recreation
  const alternatingSections = useMemo(
    () => [
      {
        image: image1,
        heading: "12 MONTH MEMBERSHIP",
        description:
          "• Admission Fee: ₹500\n• Monthly Fees: ₹10,000\n• Total Cost: ₹10,500\n• Best value for long-term fitness goals\n• Most comprehensive membership plan",
        imageFirst: false,
      },
      {
        image: image2,
        heading: "6 MONTH MEMBERSHIP",
        description:
          "• Admission Fee: ₹500\n• Monthly Fees: ₹6,000\n• Total Cost: ₹6,500\n• Perfect balance of commitment and flexibility\n• Ideal for establishing consistent workout routine",
        imageFirst: true,
      },
      {
        image: image3,
        heading: "3 MONTH MEMBERSHIP",
        description:
          "• Admission Fee: ₹500\n• Monthly Fees: ₹3,500\n• Total Cost: ₹4,000\n• Short-term commitment with great results\n• Perfect for seasonal fitness goals",
        imageFirst: false,
      },
      {
        image: image4,
        heading: "1 MONTH MEMBERSHIP",
        description:
          "• Admission Fee: ₹500\n• Monthly Fees: ₹1,500\n• Total Cost: ₹2,000\n• Flexible monthly option\n• Perfect for beginners or travelers",
        imageFirst: true,
      },
    ],
    []
  );

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
          className={`page-intro-overlay ${
            isOverlayFading ? "page-intro-overlay--fade" : ""
          }`}
          aria-hidden="true"
        />
      )}
      <TopBanner />
      <Navbar />
      <Hero allowReveal={isOverlayFading} />
      <DietServicesBanner />
      {alternatingSections.map((section, index) => (
        <AlternatingSection
          key={index}
          image={section.image}
          heading={section.heading}
          description={section.description}
          imageFirst={section.imageFirst}
        />
      ))}
      <GymAccessBanner />

      <Footer />
    </div>
  );
}

export default App;
