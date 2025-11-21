import { useMemo, useState } from 'react'
import img1 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg'
import img2 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg'
import img3 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (1).jpeg'
import img4 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (2).jpeg'
import img5 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg'
import img6 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg'
import { FaWhatsapp } from 'react-icons/fa'

const images = [
  { src: img1, alt: 'The Ivory Reformer' },
  { src: img2, alt: 'Pilates Instruction Session' },
  { src: img3, alt: 'Home Workout Class' },
  { src: img4, alt: 'Modern Pilates Studio' },
  { src: img5, alt: 'Outdoor Pilates' },
  { src: img6, alt: 'Luxury Studio Pilates' },
]

function ConnectSection() {
  const galleryImages = useMemo(() => images, [])
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <section className="w-full bg-white py-8 md:py-12">
        {/* Header */}
        <div className="w-full px-5 text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-6">
            <span className="text-gray-900">CONNECT WITH US</span>{' '}
            <span className="text-gray-600">@BFC</span>
          </h2>
          
          <a 
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-green-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Image Gallery Grid - 1 row x 6 columns */}
        <div className="grid grid-cols-6 gap-0">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/3] overflow-hidden group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal/Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
            onClick={closeModal}
            aria-label="Close"
          >
            ×
          </button>
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ConnectSection
