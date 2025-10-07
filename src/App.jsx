import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tugas from "./components/Tugas";
import WhyUs from "./components/alasan";
import Layanan from "./components/Layanan";
import Footer from "./components/Footer";
import TestimonialPayment from "./components/testi";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Tugas />
      <WhyUs />
      <Layanan />
      <TestimonialPayment />
      <Footer />
    </>
  );
}

export default App;
