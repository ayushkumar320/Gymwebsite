import { useMemo } from 'react'

const BANNER_ITEMS = [
  'WEIGHT MANAGEMENT',
  'WEIGHT LOSS',
  'WEIGHT GAINING',
  'DIET COUNSELING FROM EXPERT DIETICIANS',
]

const MARQUEE_REPEAT_COUNT = 3

function DietServicesBanner() {
  const marqueeItems = useMemo(
    () => Array.from({ length: MARQUEE_REPEAT_COUNT }).flatMap(() => BANNER_ITEMS),
    []
  )

  return (
    <div className="bg-white text-black py-6 overflow-hidden">
      <div className="flex items-center gap-8 whitespace-nowrap animate-scroll">
        {marqueeItems.map((item, index) => (
          <span key={index} className="text-xs font-bold flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default DietServicesBanner

