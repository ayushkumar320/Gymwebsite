import {useEffect, useState} from "react";
import videoBg from "../assets/WhatsApp Video 2025-11-13 at 11.00.30.mp4";

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
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div
        className={`hero-content relative z-20 max-w-4xl mx-auto px-5 text-center mt-[102px] ${
          showContent ? "hero-content--visible" : ""
        }`}
      >
        <h1 className="text-9xl md:text-6xl sm:text-5xl font-extrabold leading-tight mb-5 text-white">
          BENGALURU FITNESS CONNECTION
        </h1>
        <p className="text-3xl md:text-2xl mb-8 text-white">START YOUR FITNESS JOURNEY WITH US</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="relative bg-transparent text-white border-2 border-white py-4 px-10 text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:text-white hover:shadow-xl rounded-lg overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-green-500 before:transition-all before:duration-300 before:z-0 hover:before:w-full z-10">
            <span className="relative z-20">CONNECT WITH US</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
