import { useMemo } from 'react'

const MEDIA_BRANDS = [
  'NEWS.com.au',
  'are media',
  'yahoo!',
  'BuzzFeed',
  "Woman's Day",
  "Women's Weekly",
  'Who AUSTRALIA',
  'SITCHU.',
  'Daily Mail',
  'BROADSHEET',
]

function AsSeenIn() {
  // Memoize brand logos array to prevent recreation
  const brandLogos = useMemo(() => MEDIA_BRANDS, [])

  return (
    <section className="py-12 px-5 bg-white overflow-hidden">
      <div className="flex items-center justify-center gap-12 md:gap-16 flex-wrap md:flex-nowrap max-w-7xl mx-auto">
        {brandLogos.map((brand, index) => (
          <div key={index} className="text-gray-900 text-base md:text-lg lg:text-xl font-medium whitespace-nowrap flex-shrink-0">
            {brand}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AsSeenIn

