
import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutUs from "../components/AboutUs";
import ContactSection from "../components/ContactSection";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <Features />
      <AboutUs />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;
