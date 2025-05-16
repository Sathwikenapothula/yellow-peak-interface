
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Award, Users, Clock } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const teamMembers = [
  {
    name: "Alexandra Wang",
    position: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description: "15+ years of experience in investment banking and wealth management."
  },
  {
    name: "Michael Chen",
    position: "Chief Investment Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Previously led investment strategy at Goldman Sachs with a focus on emerging markets."
  },
  {
    name: "Sarah Johnson",
    position: "Head of Client Relations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80",
    description: "Dedicated to creating exceptional client experiences and building lasting relationships."
  },
  {
    name: "David Patel",
    position: "Technology Director",
    image: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "Leading our digital transformation and innovative financial technology solutions."
  }
];

const stats = [
  { value: "15+", label: "Years of Excellence", icon: Clock },
  { value: "$2.5B+", label: "Assets Under Management", icon: Award },
  { value: "1,200+", label: "Satisfied Clients", icon: Users }
];

const AboutUs = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="lg:text-center mb-16"
        >
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Our Mission & Values
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Yellow Mountain has been providing exceptional investment services since 2005.
            We are committed to helping our clients achieve financial success through personalized strategies.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          variants={fadeIn}
          className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex bg-primary/10 p-3 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeIn}
          >
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" 
              alt="Team meeting" 
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={fadeIn}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Who We Are</h3>
              <p className="mt-3 text-gray-600">
                Yellow Mountain is an independent investment management firm dedicated to providing personalized financial solutions for individuals, families, and businesses. With over 15 years of industry experience, we've helped countless clients achieve their financial goals through innovative strategies and personalized service.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
              <p className="mt-3 text-gray-600">
                We believe in a client-first approach, where your financial well-being is our highest priority. We combine innovative strategies with time-tested investment principles to help you build and protect your wealth for generations to come.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
              <div className="grid grid-cols-1 gap-3">
                {["Integrity", "Excellence", "Innovation", "Client Focus", "Transparency"].map((value, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-primary text-sm mb-2">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
        >
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg text-primary mb-2">Trust</h4>
              <CardDescription>We build long-term relationships based on transparency and integrity. Every decision we make is guided by what's best for our clients.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="font-bold text-lg text-primary mb-2">Excellence</h4>
              <CardDescription>We constantly strive to exceed expectations in everything we do, from investment performance to client service.</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
