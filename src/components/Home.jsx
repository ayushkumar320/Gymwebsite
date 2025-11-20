import { useMemo, useState, useEffect } from "react";
import Hero from "./Hero";
import AlternatingSection from "./AlternatingSection";
import DietServicesBanner from "./DietServicesBanner";
import GymAccessBanner from "./GymAccessBanner";
import ProductShowcase from "./ProductShowcase";
import ConnectSection from "./ConnectSection";
import PauseDetailsModal from "./PauseDetailsModal";
import { productShowcaseData } from "../data/productShowcase";
import image1 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg";
import image2 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg";
import image3 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg";
import image4 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg";

function Home({ isOverlayFading }) {
    // Memoize alternating sections data to prevent recreation
    const alternatingSections = useMemo(
        () => [
            {
                image: image1,
                heading: "12 MONTH MEMBERSHIP",
                description:
                    "• Admission Fee: ₹500\n• Monthly Fees: ₹10,000\n• Total Cost: ₹10,500\n• 30 pause days\n• Best value for long-term fitness goals\n• Most comprehensive membership plan",
                imageFirst: false,
            },
            {
                image: image2,
                heading: "6 MONTH MEMBERSHIP",
                description:
                    "• Admission Fee: ₹500\n• Monthly Fees: ₹6,000\n• Total Cost: ₹6,500\n• 20 pause days\n• Perfect balance of commitment and flexibility\n• Ideal for establishing consistent workout routine",
                imageFirst: true,
            },
            {
                image: image3,
                heading: "3 MONTH MEMBERSHIP",
                description:
                    "• Admission Fee: ₹500\n• Monthly Fees: ₹3,500\n• Total Cost: ₹4,000\n• 15 pause days\n• Short-term commitment with great results\n• Perfect for seasonal fitness goals",
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

    const [isPauseModalOpen, setIsPauseModalOpen] = useState(false);
    const [selectedPauseDays, setSelectedPauseDays] = useState(0);

    const handlePauseClick = (days) => {
        setSelectedPauseDays(days);
        setIsPauseModalOpen(true);
    };

    return (
        <>
            <Hero allowReveal={isOverlayFading} />
            <DietServicesBanner />
            {alternatingSections.map((section, index) => (
                <AlternatingSection
                    key={index}
                    image={section.image}
                    heading={section.heading}
                    description={section.description}
                    imageFirst={section.imageFirst}
                    onPauseClick={handlePauseClick}
                />
            ))}
            <GymAccessBanner />
            <ProductShowcase products={productShowcaseData} />
            <ConnectSection />
            <PauseDetailsModal
                isOpen={isPauseModalOpen}
                onClose={() => setIsPauseModalOpen(false)}
                pauseDays={selectedPauseDays}
            />
        </>
    );
}

export default Home;
