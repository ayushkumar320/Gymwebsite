import { memo, useEffect, useRef, useState } from 'react'

const ProductShowcaseSection = memo(function ProductShowcaseSection({
  product,
  imageFirst,
  index,
}) {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const imageSection = (
    <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] lg:h-full bg-[#f5f5f5] flex items-center justify-center p-[60px]">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-contain max-w-full max-h-full"
        loading="lazy"
      />
    </div>
  )

  const contentSection = (
    <div className="w-full lg:w-1/2 bg-white flex items-center px-8 md:px-12 lg:px-20 py-12 lg:py-0">
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

        <h2 className="text-[48px] font-bold text-[#d0d0d0] tracking-[0.02em] mb-6 uppercase">
          {product.name.toUpperCase()}
        </h2>

        <p className="text-[18px] text-[#666] leading-[1.7] max-w-[500px] mb-10">
          {product.description}
        </p>

        <button
          className="bg-[#d0d0d0] text-white py-4 px-9 font-semibold text-base uppercase rounded-none transition-colors duration-300 hover:bg-[#b0b0b0]"
          onClick={() => {
            // Handle button click
            console.log(`Clicked: ${product.name}`)
          }}
        >
          {product.name.toUpperCase()}
        </button>
      </div>
    </div>
  )

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen md:min-h-[700px] flex flex-col lg:flex-row bg-white"
      style={{ scrollBehavior: 'smooth' }}
    >
      {imageFirst ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1">{contentSection}</div>
          <div className="order-1 lg:order-2">{imageSection}</div>
        </>
      )}
    </section>
  )
})

function ProductShowcase({ products = [] }) {
  return (
    <div className="w-full" style={{ scrollBehavior: 'smooth' }}>
      {products.map((product, index) => (
        <ProductShowcaseSection
          key={product.id || index}
          product={product}
          imageFirst={index % 2 === 0}
          index={index}
        />
      ))}
    </div>
  )
}

export default ProductShowcase

