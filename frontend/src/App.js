import React, { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Nav from "@/components/Nav";
import Version1 from "@/components/Version1";
import ContactUs from "@/pages/ContactUs";
import LegalPage from "@/pages/LegalPage";
import EventMicrosite from "@/pages/EventMicrosite";
import EventMicrositeV1 from "@/pages/EventMicrositeV1";

// reset scroll (through Lenis when it is running) on every route change
const ScrollManager = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App font-body bg-biz-paper text-biz-ink antialiased">
        <ScrollManager />
        <Nav />
        <Routes>
          <Route path="/" element={<Version1 />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/events/autodesk-construction-connect-mumbai" element={<EventMicrosite />} />
          <Route path="/events/autodesk-construction-connect-mumbai-v1" element={<EventMicrositeV1 />} />
          <Route path="/privacy-policy" element={<LegalPage title="Privacy Policy" />} />
          <Route path="/cookie-policy" element={<LegalPage title="Cookie Policy" />} />
          <Route path="/terms-and-conditions" element={<LegalPage title="Terms & Conditions" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
