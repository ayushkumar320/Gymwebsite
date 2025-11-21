import { FaDumbbell, FaLeaf, FaPauseCircle, FaCalendarCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCalendarCheck className="w-8 h-8 text-black" />,
    title: "Open 7 Days",
    description:
      "We are open every day, including Sundays. Morning and Evening shifts available to suit your schedule.",
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-black" />,
    title: "Green Environment",
    description:
      "Train in a fresh, eco-friendly atmosphere with plenty of greenery for a revitalizing workout experience.",
  },
  {
    icon: <FaPauseCircle className="w-8 h-8 text-black" />,
    title: "Pause & Resume",
    description:
      "Traveling or sick? Pause your membership for up to 30 days and resume when you're back. No wasted days!",
  },
  {
    icon: <FaDumbbell className="w-8 h-8 text-black" />,
    title: "Premium Equipment",
    description:
      "Train with state-of-the-art equipment designed for maximum results and safety.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="2" className="text-black" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter"
          >
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-bfc-yellow to-yellow-600">BFC</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            Experience the difference with our world-class facilities, flexible policies, and supportive community.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-bfc-yellow/10 rounded-bl-full -mr-4 -mt-4 transition-transform duration-300 group-hover:scale-150"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-bfc-yellow rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 uppercase text-gray-900 tracking-tight group-hover:text-bfc-yellow-hover transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
