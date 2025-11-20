import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Import images from assets folder
import img1 from '../../assets/photo/PA1.jpeg'
import img2 from '../../assets/photo/PA2.jpeg'
import img3 from '../../assets/photo/PA3.jpeg'
import img4 from '../../assets/photo/PA4.jpeg'
import img5 from '../../assets/photo/PA5.jpeg'
import img6 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg'
import img7 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg'
import img8 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (1).jpeg'
import img9 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (2).jpeg'
import img10 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg'
import img11 from '../../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg'
import img12 from '../../assets/photo/logo.jpeg'


// Gallery items with varied sizes for dynamic layout
const GALLERY_ITEMS = [
  { src: img1, span: 'lg:col-span-2 lg:row-span-2' }, // Large featured
  { src: img2, span: '' }, // Regular
  { src: img3, span: '' }, // Regular
  { src: img4, span: 'lg:col-span-2' }, // Wide
  { src: img5, span: '' }, // Regular
  { src: img6, span: '' }, // Regular
  { src: img7, span: 'lg:col-span-2' }, // Wide
  { src: img8, span: '' }, // Regular
  { src: img9, span: '' }, // Regular
  { src: img10, span: 'lg:col-span-2' }, // Wide
  { src: img11, span: '' }, // Regular
  { src: img12, span: '' }, // Regular
]

const GalleryImage = ({ src, span, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.03,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${span}`}
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={`BFC Gallery ${index + 1}`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-2 transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Subtle Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          {/* View Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 shadow-lg">
            <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Lightbox = ({ image, onClose }) => {
  // Lock body scroll when lightbox is open
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Image Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative max-w-5xl max-h-[60vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Positioned relative to image */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 group z-50"
        >
          <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img
          src={image}
          alt="Full size"
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  )
}

export const DemoVariant1 = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div className="relative bg-white">
      {/* Container with max-width and padding */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16">
        
        {/* Gallery Grid - Dynamic Masonry Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 auto-rows-[350px] sm:auto-rows-[400px]">
          {GALLERY_ITEMS.map((item, index) => (
            <GalleryImage 
              key={index} 
              src={item.src} 
              span={item.span}
              index={index}
              onClick={() => setSelectedImage(item.src)}
            />
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-8"></div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

