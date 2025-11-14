import TopBanner from './components/TopBanner'
import Navbar from './components/Navbar'
import SaleBanner from './components/SaleBanner'
import Hero from './components/Hero'
import BestReformer from './components/BestReformer'
import StudioQuality from './components/StudioQuality'
import JourneySection from './components/JourneySection'
import ProductsSection from './components/ProductsSection'
import PerfectionSection from './components/PerfectionSection'
import AsSeenIn from './components/AsSeenIn'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import { products } from './data/products'

function App() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 font-sans">
      <TopBanner />
      <Navbar />
      <SaleBanner />
      <Hero />
      <BestReformer />
      <StudioQuality />
      <JourneySection />
      <ProductsSection products={products} />
      <PerfectionSection />
      <AsSeenIn />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
