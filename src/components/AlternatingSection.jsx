import {memo, useMemo} from "react";

const AlternatingSection = memo(function AlternatingSection({
  image,
  heading,
  description,
  imageFirst = true,
}) {
  // Memoize image source to prevent recreation
  const imageSrc = useMemo(() => image, [image]);

  const imageSection = (
    <img
      src={imageSrc}
      alt={heading}
      className="w-full h-full object-cover"
      loading="lazy"
    />
  );

  const textSectionContent = (
    <div className="max-w-lg">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 uppercase tracking-tight leading-tight">
        {heading}
      </h2>
      <div className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed space-y-2">
        {description.split("\n").map((line, index) => {
          if (line.trim().startsWith("•")) {
            return (
              <div key={index} className="flex items-start gap-3">
                <span className="text-yellow-500 font-bold text-xl mt-1">
                  •
                </span>
                <span className="flex-1">{line.replace("•", "").trim()}</span>
              </div>
            );
          }
          return line.trim() ? <p key={index}>{line}</p> : null;
        })}
      </div>
      <button className="relative bg-white text-black border-2 border-green-500 py-4 px-12 text-lg font-bold cursor-pointer transition-all duration-300 uppercase tracking-wider hover:text-white hover:shadow-xl rounded-lg overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-green-500 before:transition-all before:duration-300 before:z-0 hover:before:w-full z-10">
        <span className="relative z-20">Subscribe Now</span>
      </button>
    </div>
  );

  const imageContainerClasses = imageFirst
    ? "w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden"
    : "w-full md:w-1/2 h-[500px] md:h-auto overflow-hidden order-1 md:order-2";

  const textContainerClasses = imageFirst
    ? "w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-24"
    : "w-full md:w-1/2 flex items-center justify-center bg-white px-8 md:px-16 py-16 md:py-24 order-2 md:order-1";

  return (
    <section className="w-full min-h-[600px] flex flex-col md:flex-row bg-white">
      <div className={imageContainerClasses}>{imageSection}</div>
      <div className={textContainerClasses}>{textSectionContent}</div>
    </section>
  );
});

export default AlternatingSection;
