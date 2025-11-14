function TopBanner() {
  const bannerItems = [
    'Black Friday Sale',
    'Complimentary Delivery',
    'Train now, pay later with Afterpay',
    'Australian owned',
    'Zip - Own it now, pay later'
  ]

  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div className="flex justify-center items-center gap-8 whitespace-nowrap animate-scroll">
        {bannerItems.map((item, index) => (
          <span key={index} className="text-xs font-normal">{item}</span>
        ))}
      </div>
    </div>
  )
}

export default TopBanner

