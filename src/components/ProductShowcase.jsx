import { motion } from "framer-motion";

function ProductShowcase({ products = [] }) {
  if (products.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {products.map((product, index) => (
          <motion.div
            key={product.id || index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-bfc-yellow/10 transform translate-x-4 translate-y-4 rounded-2xl -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[500px] md:h-[600px] object-cover rounded-2xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6 text-gray-900 relative inline-block">
                {product.name}
                <span className="absolute bottom-0 left-0 w-full h-2 bg-bfc-yellow/30 -z-10"></span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-medium">
                {product.description}
              </p>

              {/* Decorative Element */}
              <div className={`w-20 h-1 bg-bfc-yellow rounded-full mx-auto lg:mx-0 ${
                 index % 2 === 1 ? "lg:ml-auto" : ""
              }`}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductShowcase;
