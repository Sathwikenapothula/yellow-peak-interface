
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Features />
        <AboutUs />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
