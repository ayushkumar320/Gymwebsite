import GymTimings from "./GymTimings";
import Hero from "./Hero";
import DietServicesBanner from "./DietServicesBanner";
import GymAccessBanner from "./GymAccessBanner";
import ProductShowcase from "./ProductShowcase";
import ConnectSection from "./ConnectSection";
import WhyChooseUs from "./WhyChooseUs";
import MembershipPlans from "./MembershipPlans";
import { productShowcaseData } from "../data/productShowcase";
import CommunityGallery from "./CommunityGallery";

function Home({ isOverlayFading }) {
    return (
        <>
            <Hero allowReveal={isOverlayFading} />
            <WhyChooseUs />
            <DietServicesBanner />
            <GymTimings />
            <GymAccessBanner />
            <ProductShowcase products={productShowcaseData} />
            <CommunityGallery />
            <MembershipPlans />
            <ConnectSection />
        </>
    );
}

export default Home;
