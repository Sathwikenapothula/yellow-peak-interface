
import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
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
      icon: "BarChart3",
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
      icon: "Server",
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
      icon: "Package",
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

  // Helper function to render icons
  const renderIcon = (iconName) => (
    <div className="h-6 w-6 text-primary">
      <span className="block h-6 w-6 bg-primary/20 rounded-full"></span>
    </div>
  );

  return (
    <MainLayout>
      {/* Hero section */}
      <motion.header 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="py-16 text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-3">
          Our <span className="text-primary">Solutions</span>
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-500">
          Comprehensive services and products designed to meet your financial goals and business needs.
        </p>
      </motion.header>
      
      {/* Solutions cards */}
      <section className="py-16 bg-white">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {solutions.map((solution) => (
            <motion.div key={solution.id} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {renderIcon(solution.icon)}
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
                  <Link to={`/solutions/${solution.id}`}>
                    <Button>Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gray-50 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Ready to take your financial journey to the next level?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our expert team is ready to help you achieve your financial goals.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us Today</Button>
          </Link>
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default Solutions;
