import { useMemo } from 'react'
import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DesignStudioSection from './components/DesignStudioSection'
import AlternatingSection from './components/AlternatingSection'
import DietServicesBanner from './components/DietServicesBanner'
import GymAccessBanner from './components/GymAccessBanner'
import Footer from './components/Footer'
import image1 from './assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg'
import image2 from './assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg'
import image3 from './assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg'

function App() {

  // Memoize alternating sections data to prevent recreation
  const alternatingSections = useMemo(
    () => [
      {
        image: image1,
        heading: 'BEST REFORMER PILATES',
        description: 'Achieve maximum results in minimal time with our versatile equipment, perfect for quick, effective workouts anywhere.',
        imageFirst: false,
      },
      {
        image: image2,
        heading: 'PREMIUM PILATES EQUIPMENT',
        description: 'Experience professional-grade equipment designed for both home studios and commercial fitness centers.',
        imageFirst: true,
      },
      {
        image: image3,
        heading: 'TRANSFORM YOUR FITNESS',
        description: 'Elevate your Pilates practice with our expertly crafted reformers that combine style, functionality, and durability.',
        imageFirst: false,
      },
    ],
    []
  )

  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      <TopBanner />
      <Navbar />
      <Hero />
      <DietServicesBanner />
      <DesignStudioSection />
      {alternatingSections.map((section, index) => (
        <AlternatingSection
          key={index}
          image={section.image}
          heading={section.heading}
          description={section.description}
          imageFirst={section.imageFirst}
        />
      ))}
      <GymAccessBanner />
 
      <Footer />
    </div>
  )
}

export default App
