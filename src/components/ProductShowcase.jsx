import {memo, useEffect, useRef, useState} from "react";

const ProductShowcaseSection = memo(function ProductShowcaseSection({
  product,
  index,
  onInView,
}) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          onInView(index);
        }
      },
      {threshold: 0.3, rootMargin: "0px"}
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [index, onInView]);

  const isFeatured = index === 0;

  return (
    <section
      ref={sectionRef}
      className="w-full h-screen flex items-center justify-center bg-white"
    >
      {/* Scrollable Content */}
      <div className="w-full max-w-[600px] bg-white flex items-center px-8 md:px-12 lg:px-16 py-10 lg:py-0">
        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {product.smallDescription && (
            <p
              className={
                isFeatured
                  ? "text-[12px] md:text-[13px] uppercase tracking-[0.5em] text-[#7a7a7a] mb-6"
                  : "text-[12px] md:text-[13px] uppercase tracking-[0.5em] text-[#7a7a7a] mb-6"
              }
            >
              {product.smallDescription}
            </p>
          )}

          <h2
            className={
              isFeatured
                ? "text-[32px] md:text-[42px] font-bold text-[#0f0f0f] tracking-[0.08em] mb-5 uppercase leading-tight"
                : "text-[32px] md:text-[38px] font-bold text-[#d0d0d0] tracking-[0.08em] mb-5 uppercase leading-tight"
            }
          >
            {isFeatured
              ? product.name.toUpperCase()
              : product.name.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < product.name.split(" ").length - 1 && <br />}
                  </span>
                ))}
          </h2>

          <p
            className={
              isFeatured
                ? "text-[16px] md:text-[17px] text-[#1c1c1c] leading-[1.7] max-w-[520px] mb-8"
                : "text-[16px] text-[#666] leading-[1.6] max-w-[500px] mb-8"
            }
          >
            {product.description}
          </p>

          <button
            className={
              isFeatured
                ? "bg-[#050505] text-white py-3 px-8 font-semibold text-[13px] tracking-[0.15em] uppercase rounded-none transition-colors duration-300 hover:bg-[#1a1a1a]"
                : "bg-[#d0d0d0] text-white py-3 px-8 font-semibold text-[13px] tracking-[0.1em] uppercase rounded-none transition-colors duration-300 hover:bg-[#b0b0b0]"
            }
            onClick={() => {
              console.log(`Clicked: ${product.name}`);
            }}
          >
            {product.name.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  );
});

function ProductShowcase({products = []}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const handleSectionInView = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = "0";
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = "1";
        }
      }, 300);
    }
  }, [activeIndex]);

  if (products.length === 0) return null;

  const activeProduct = products[activeIndex] || products[0];

  return (
    <div ref={containerRef} className="w-full relative lg:flex">
      {/* Sticky Left Image Container */}
      <div className="hidden lg:flex sticky top-0 w-1/2 h-screen bg-white items-center justify-center p-8 md:p-12 z-10 flex-shrink-0">
        <div className="w-full max-w-[500px] h-full flex items-center justify-center">
          <img
            ref={imageRef}
            src={activeProduct.image}
            alt={activeProduct.name}
            className="w-full h-full object-contain transition-opacity duration-500"
            loading="lazy"
          />
        </div>
      </div>

      {/* Scrollable Right Content - All sections stacked */}
      <div className="w-full lg:w-1/2">
        {products.map((product, index) => (
          <ProductShowcaseSection
            key={product.id || index}
            product={product}
            index={index}
            onInView={handleSectionInView}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductShowcase;
