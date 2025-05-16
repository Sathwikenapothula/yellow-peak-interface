
import { 
  BarChart3, 
  Server,
  Package,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  {
    id: "business",
    name: 'Business Solutions',
    description: 'Strategic financial advisory and capital raising services tailored for business growth and optimization.',
    icon: BarChart3,
  },
  {
    id: "it",
    name: 'IT Solutions',
    description: 'Cutting-edge technology solutions to streamline operations and enhance security across your financial systems.',
    icon: Server,
  },
  {
    id: "products",
    name: 'Products',
    description: 'Innovative financial products designed to maximize returns while minimizing risk in diverse market conditions.',
    icon: Package,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="lg:text-center"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Yellow Mountain offers a full range of solutions to meet your business and financial needs.
          </p>
        </motion.div>

        <div className="mt-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div 
                key={feature.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col bg-white p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary">
                    <feature.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  <div className="mt-6">
                    <Link to={`/solutions#${feature.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
