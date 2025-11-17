import { useMemo } from 'react'
import img1 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg'
import img2 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg'
import img3 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (1).jpeg'
import img4 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (2).jpeg'
import img5 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg'
import img6 from '../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg'

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

  return (
    <section className="w-full bg-white py-8 md:py-12">
      {/* Header */}
      <div className="w-full px-5 text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wide">
          <span className="text-gray-900">CONNECT WITH US</span>{' '}
          <span className="text-gray-600">@BFC</span>
        </h2>
      </div>

      {/* Image Gallery Grid - 1 row x 6 columns */}
      <div className="grid grid-cols-6 gap-0">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative w-full aspect-[4/3] overflow-hidden group">
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
  )
}

export default ConnectSection
