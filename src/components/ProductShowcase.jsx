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
      {threshold: 0.5, rootMargin: "0px"}
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
      className="w-full min-h-screen lg:h-screen flex items-center justify-center bg-white sticky top-0 lg:static z-10 border-t border-gray-100 lg:border-none"
    >
      {/* Scrollable Content */}
      <div className="w-full max-w-[700px] bg-white flex items-center px-6 md:px-12 lg:px-20 py-8 lg:py-0">
        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Mobile Image - Visible only on small screens */}
          <div className="w-full mb-6 lg:hidden flex justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full max-w-[400px] h-[40vh] object-cover rounded-xl shadow-lg"
            />
          </div>

          {product.smallDescription && (
            <p
              className={
                isFeatured
                  ? "text-[11px] md:text-[14px] uppercase tracking-[0.5em] text-[#7a7a7a] mb-4 lg:mb-7"
                  : "text-[11px] md:text-[14px] uppercase tracking-[0.5em] text-[#7a7a7a] mb-4 lg:mb-7"
              }
            >
              {product.smallDescription}
            </p>
          )}

          <h2
            className={
              isFeatured
                ? "text-[32px] md:text-[52px] font-bold text-[#0f0f0f] tracking-[0.08em] mb-4 lg:mb-6 uppercase leading-tight"
                : "text-[32px] md:text-[48px] font-bold text-[#0f0f0f] tracking-[0.08em] mb-4 lg:mb-6 uppercase leading-tight"
            }
          >
            {product.name.toUpperCase()}
          </h2>

          <p
            className={
              isFeatured
                ? "text-[15px] md:text-[19px] text-[#1c1c1c] leading-[1.6] max-w-[600px] mb-8 lg:mb-10"
                : "text-[15px] text-[#1c1c1c] leading-[1.6] max-w-[580px] mb-8 lg:mb-10"
            }
          >
            {product.description}
          </p>

          <button
            className="relative bg-white text-black border-2 border-green-500 py-3 lg:py-4 px-8 lg:px-12 text-sm lg:text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:text-white hover:shadow-xl rounded-lg overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-green-500 before:transition-all before:duration-300 before:z-0 hover:before:w-full z-10 w-full lg:w-auto"
            onClick={() => {
              console.log(`Clicked: ${product.name}`);
            }}
          >
            <span className="relative z-20">{product.name.toUpperCase()}</span>
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

  if (products.length === 0) return null;

  const activeProduct = products[activeIndex] || products[0];

  return (
    <div ref={containerRef} className="w-full relative lg:flex">
      {/* Sticky Left Image Container - Desktop Only */}
      <div className="hidden lg:flex sticky top-0 w-1/2 h-screen bg-white items-center justify-center p-8 md:p-12 z-10 flex-shrink-0">
        <div className="w-full max-w-[500px] h-full flex items-center justify-center">
          <img
            ref={imageRef}
            src={activeProduct.image}
            alt={activeProduct.name}
            className="w-full h-full object-contain"
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
