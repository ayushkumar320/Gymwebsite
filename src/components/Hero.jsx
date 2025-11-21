import {useEffect, useState} from "react";
import videoBg from "../assets/WhatsApp Video 2025-11-13 at 11.00.30.mp4";
import { FaWhatsapp } from "react-icons/fa";

function Hero({allowReveal}) {
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!allowReveal) return;

    const contentTimer = window.setTimeout(() => setShowContent(true), 100);
    return () => window.clearTimeout(contentTimer);
  }, [allowReveal]);

  useEffect(() => {
    if (!allowReveal || !isVideoReady) return;

    const frame = window.requestAnimationFrame(() => setShowVideo(true));
    return () => window.cancelAnimationFrame(frame);
  }, [allowReveal, isVideoReady]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`hero-video absolute top-0 left-0 w-full h-full object-cover z-0 ${
          showVideo ? "hero-video--visible" : ""
        }`}
        onCanPlay={() => setIsVideoReady(true)}
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>

      {/* Content */}
      <div
        className={`hero-content relative z-20 max-w-5xl mx-auto px-4 text-center mt-[102px] ${
          showContent ? "hero-content--visible" : ""
        }`}
      >
        <h2 className="text-bfc-yellow font-bold tracking-widest text-sm md:text-lg mb-4 uppercase">
          Bengaluru Fitness Connection
        </h2>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-none mb-6 text-white/90 uppercase tracking-tighter">
          Unleash Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-400">True Potential</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto font-medium">
          Experience world-class training, premium equipment, and a supportive community that pushes you further.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-bfc-yellow text-black border-2 border-bfc-yellow py-4 px-10 text-base font-black cursor-pointer transition-all duration-300 uppercase tracking-wider hover:bg-black hover:text-white hover:border-bfc-yellow hover:shadow-[0_0_20px_rgba(244,196,48,0.5)] rounded-full overflow-hidden z-10 flex items-center gap-2"
          >
            <FaWhatsapp className="text-xl" />
            <span className="relative z-20">Start Your Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
