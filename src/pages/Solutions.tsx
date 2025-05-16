
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight, BarChart3, Server, Package } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Solutions = () => {
  const solutions = [
    {
      id: "business",
      title: "Business Solutions",
      icon: BarChart3,
      description: "Strategic financial advisory, capital raising, and M&A services tailored to elevate your business performance.",
      services: [
        "Strategic Planning & Analysis",
        "Capital Structure Optimization",
        "Merger & Acquisition Advisory",
        "Debt & Equity Financing",
        "Growth Strategy Development"
      ]
    },
    {
      id: "it",
      title: "IT Solutions",
      icon: Server,
      description: "Cutting-edge technology solutions to streamline operations, enhance security, and drive digital transformation.",
      services: [
        "Financial Software Implementation",
        "Data Security & Compliance",
        "Portfolio Management Systems",
        "Digital Transformation",
        "Cloud Migration & Management"
      ]
    },
    {
      id: "products",
      title: "Products",
      icon: Package,
      description: "Innovative financial products designed to maximize returns while minimizing risk across diverse market conditions.",
      services: [
        "Fixed Income Products",
        "Equity Investment Vehicles",
        "Alternative Investment Solutions",
        "ETF & Index Products",
        "Structured Investment Products"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-b from-gray-50 to-white py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Comprehensive services and products designed to meet your financial goals and business needs.
            </p>
          </div>
        </div>
      </motion.div>
      
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {solutions.map((solution) => (
              <motion.div key={solution.id} variants={fadeIn}>
                <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                    <p className="text-gray-600 mb-4">{solution.description}</p>
                    <ul className="space-y-2 mb-6">
                      {solution.services.map((service, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                          <span className="text-gray-600">{service}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/solutions/${solution.id}`} className="inline-block">
                      <Button>Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to take your financial journey to the next level?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our expert team is ready to help you achieve your financial goals.
            </p>
            <div className="mt-8 flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="px-8">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Solutions;
