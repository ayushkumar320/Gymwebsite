import { motion } from "framer-motion";
import image1 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg";
import image2 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg";
import image3 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg";
import image4 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg";
import image5 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (1).jpeg";

const images = [
  { src: image4, alt: "Gym Community 1" },
  { src: image2, alt: "Gym Community 2" },
  { src: image3, alt: "Gym Community 3" },
  { src: image1, alt: "Gym Community 4" },
  { src: image5, alt: "Gym Community 5" },
  { src: image4, alt: "Gym Community 6" }, // Duplicate for seamless loop
  { src: image2, alt: "Gym Community 7" },
];

function CommunityGallery() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter mb-4"
          >
            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">Tribe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400 font-medium max-w-2xl mx-auto"
          >
            More than just a gym. It's a lifestyle.
          </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-x-auto overflow-y-hidden no-scrollbar touch-pan-x">
        <div className="flex gap-6 animate-scroll hover:pause min-w-max px-4">
          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[400px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden group transition-all duration-500"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-bfc-yellow font-bold uppercase tracking-wider text-lg">
                  #BFCFamily
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityGallery;
