import { DemoVariant1 } from './blocks/animated-gallery-demo'

function Gallery() {
  return (
    <div className="w-full min-h-screen bg-[#FDFDFD] font-sans relative">
        {/* Dark Header Section for Navbar Visibility */}
        <div className="w-full bg-[#111111] pt-40 pb-32 px-4 md:px-8 relative overflow-hidden rounded-b-[3rem]">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <h2 className="text-green-500 font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up">
                    Gallery
                </h2>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                    Captured <br className="md:hidden" /> Moments
                </h1>
            </div>
        </div>

        <div className="relative z-20 pb-20 px-4 md:px-8">
             <DemoVariant1 />
        </div>
    </div>
  )
}

export default Gallery

