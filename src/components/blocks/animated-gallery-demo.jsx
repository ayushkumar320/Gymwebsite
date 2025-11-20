import {
  ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from '@/components/blocks/animated-gallery'
import { Link } from 'react-router-dom'

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

// Using local images from assets folder - distributed across 3 columns
const IMAGES_1 = [img1, img2, img3, img4]

const IMAGES_2 = [img5, img6, img7, img8]

const IMAGES_3 = [img9, img10, img11, img12]

export const DemoVariant1 = () => {
  return (
    <div className="relative bg-white">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 md:pt-24 text-center">
        <ContainerAnimated>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5 text-gray-900 uppercase tracking-tight">
            Bengaluru Fitness Club
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-6">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Transform your body and mind with world-class fitness facilities, expert trainers, and an inspiring community dedicated to your success.
          </p>
        </ContainerAnimated>

        <ContainerAnimated className="flex justify-center items-center mt-8">
          <Link
            to="/contact"
            className="relative bg-transparent text-gray-900 border-2 border-gray-900 py-4 px-10 text-base font-semibold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:text-white hover:shadow-xl rounded-lg overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-green-500 before:transition-all before:duration-300 before:z-0 hover:before:w-full z-10"
          >
            <span className="relative z-20">Contact Us</span>
          </Link>
        </ContainerAnimated>
      </ContainerStagger>

      <div
        className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: 'linear-gradient(to right, gray, rebeccapurple, blue)',
          filter: 'blur(84px)',
          mixBlendMode: 'screen',
        }}
      />

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={['-10%', '2%']} className="-mt-2">
              {IMAGES_1.map((imageSrc, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageSrc}
                  alt={`Gallery item ${index + 1}`}
                  loading="lazy"
                />
              ))}
            </GalleryCol>

            <GalleryCol className="mt-[-50%]" yRange={['15%', '5%']}>
              {IMAGES_2.map((imageSrc, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageSrc}
                  alt={`Gallery item ${index + 5}`}
                  loading="lazy"
                />
              ))}
            </GalleryCol>

            <GalleryCol yRange={['-10%', '2%']} className="-mt-2">
              {IMAGES_3.map((imageSrc, index) => (
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageSrc}
                  alt={`Gallery item ${index + 9}`}
                  loading="lazy"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
  )
}

