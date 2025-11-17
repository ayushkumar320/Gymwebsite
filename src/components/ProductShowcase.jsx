import { memo, useEffect, useRef, useState } from 'react'

const ProductShowcaseSection = memo(function ProductShowcaseSection({
  product,
  index,
  onInView,
}) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          onInView(index)
        }
      },
      { threshold: 0.5, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [index, onInView])

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center bg-white"
    >
      {/* Scrollable Content */}
      <div className="w-full bg-white flex items-center px-8 md:px-12 lg:px-20 py-12 lg:py-0 min-h-screen">
        <div
          className={`w-full transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {product.smallDescription && (
            <p className="text-[16px] text-[#999] leading-[1.8] mb-10">
              {product.smallDescription}
            </p>
          )}

          <h2 className="text-[48px] font-bold text-[#d0d0d0] tracking-[0.02em] mb-6 uppercase leading-tight">
            {product.name.split(' ').map((word, i) => (
              <span key={i}>
                {word}
                {i < product.name.split(' ').length - 1 && <br />}
              </span>
            ))}
          </h2>

          <p className="text-[18px] text-[#666] leading-[1.7] max-w-[500px] mb-10">
            {product.description}
          </p>

          <button
            className="bg-[#d0d0d0] text-white py-4 px-9 font-semibold text-base uppercase rounded-none transition-colors duration-300 hover:bg-[#b0b0b0]"
            onClick={() => {
              console.log(`Clicked: ${product.name}`)
            }}
          >
            {product.name.toUpperCase()}
          </button>
        </div>
      </div>
    </section>
  )
})

function ProductShowcase({ products = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  const handleSectionInView = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.style.opacity = '0'
      setTimeout(() => {
        if (imageRef.current) {
          imageRef.current.style.opacity = '1'
        }
      }, 300)
    }
  }, [activeIndex])

  if (products.length === 0) return null

  const activeProduct = products[activeIndex] || products[0]

  return (
    <div ref={containerRef} className="w-full relative lg:flex">
      {/* Sticky Left Image Container */}
      <div className="hidden lg:flex sticky top-0 w-1/2 h-screen bg-[#f5f5f5] items-center justify-center p-[60px] z-10 flex-shrink-0">
        <img
          ref={imageRef}
          src={activeProduct.image}
          alt={activeProduct.name}
          className="w-full h-full object-contain max-w-full max-h-full transition-opacity duration-500"
          loading="lazy"
        />
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
  )
}

export default ProductShowcase
