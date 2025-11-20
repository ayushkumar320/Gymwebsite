import {
  ContainerScroll,
  ContainerSticky,
  GalleryCol,
  GalleryContainer,
} from '@/components/blocks/animated-gallery'

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
    <div className="relative bg-white pt-20">


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

