import React from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Signals from "@/components/Signals";
import WhatWeBuild from "@/components/WhatWeBuild";
import Rooms from "@/components/Rooms";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Engage from "@/components/Engage";
import Belief from "@/components/Belief";
import WhyExist from "@/components/WhyExist";
import HowWeWork from "@/components/HowWeWork";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App antialiased">
      <Navbar />
      <main>
        <Hero />
        <Signals />
        <WhatWeBuild />
        <Rooms />
        <WhoWeWorkWith />
        <Engage />
        <Belief />
        <WhyExist />
        <HowWeWork />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
