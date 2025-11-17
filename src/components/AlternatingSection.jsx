import { memo, useMemo } from 'react'

const AlternatingSection = memo(function AlternatingSection({ image, heading, description, imageFirst = true }) {
  // Memoize image source to prevent recreation
  const imageSrc = useMemo(() => image, [image])

  const imageSection = (
    <img
      src={imageSrc}
      alt={heading}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  )

  const textSectionContent = (
    <div className="max-w-lg">
      <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 uppercase tracking-tight leading-tight">
        {heading}
      </h2>
      <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
        {description}
      </p>
      <button className="bg-gray-900 text-white border-none py-4 px-10 text-base font-semibold cursor-pointer transition-all uppercase tracking-wider hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg">
        Shop now
      </button>
    </div>
  )

  const imageContainerClasses = imageFirst 
    ? "w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden"
    : "w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden order-1 md:order-2"

  const textContainerClasses = imageFirst
    ? "w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-24"
    : "w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-24 order-2 md:order-1"

  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row bg-white">
      <div className={imageContainerClasses}>
        {imageSection}
      </div>
      <div className={textContainerClasses}>
        {textSectionContent}
      </div>
    </section>
  )
})

export default AlternatingSection

