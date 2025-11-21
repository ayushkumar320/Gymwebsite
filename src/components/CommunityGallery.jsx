import { motion } from "framer-motion";
import image1 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.55.jpeg";
import image2 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (1).jpeg";
import image3 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.57 (2).jpeg";
import image4 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56.jpeg";
import image5 from "../assets/photo/WhatsApp Image 2025-11-13 at 10.59.56 (1).jpeg";

const images = [
  { src: image4, alt: "Gym Community 1", span: "md:col-span-2 md:row-span-2" },
  { src: image2, alt: "Gym Community 2", span: "md:col-span-1 md:row-span-1" },
  { src: image3, alt: "Gym Community 3", span: "md:col-span-1 md:row-span-2" },
  { src: image1, alt: "Gym Community 4", span: "md:col-span-1 md:row-span-1" },
{ src: image5, alt: "Gym Community 5", span: "md:col-span-1 md:row-span-1" },

];

function CommunityGallery() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4"
          >
            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">Tribe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 font-medium max-w-2xl mx-auto"
          >
            More than just a gym. It's a lifestyle.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${img.span}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="text-white font-bold uppercase tracking-wider text-sm">
                  #BFCFamily
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommunityGallery;
