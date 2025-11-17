const BANNER_ITEMS = ['ACCESS TO THE GYM ON SUNDAY   UNLIMITED ACCESS TO THE GYM']

const MARQUEE_REPEAT_COUNT = 3

function GymAccessBanner() {
  const marqueeItems = Array.from({ length: MARQUEE_REPEAT_COUNT }).flatMap(() => BANNER_ITEMS)

  return (
    <div className="bg-white text-black py-8 md:py-10 overflow-hidden">
      <div className="flex items-center gap-8 md:gap-12 whitespace-nowrap animate-scroll">
        {marqueeItems.map((item, index) => (
          <span key={index} className="text-2xl md:text-3xl lg:text-4xl font-bold flex-shrink-0 uppercase tracking-tight">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default GymAccessBanner

