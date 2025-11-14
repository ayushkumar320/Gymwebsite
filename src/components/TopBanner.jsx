import { useMemo } from 'react'

// Static banner items - moved outside component
const BANNER_ITEMS = [
  'SUNDAY OPEN',
  'UNLIMITED ACCESS TO THE GYM',
  '30% OFF ALL MEMBERSHIPS',
  'NO LOCK-IN PERIODS',
  'NO HIDDEN FEES',
  'NO CANCELLATION FEES',
]

function TopBanner() {
  // Memoize duplicated items to prevent recreation on every render
  const duplicatedItems = useMemo(() => [...BANNER_ITEMS, ...BANNER_ITEMS], [])

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white py-2 overflow-hidden z-50 h-8">
      <div className="flex items-center gap-8 whitespace-nowrap animate-scroll">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="text-xs font-normal flex-shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TopBanner

