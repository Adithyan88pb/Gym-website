import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home/Home";
import About from "./../Pages/About/About";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import NotFound from "../Pages/NotFound/NotFound";
import Contacta from "../Pages/Contacta/Contacta";
import Winners from "../Pages/Winners/Winners";
import ServicesCard from "../Pages/ServicesCard/ServicesCard";
import ImageGallery from "../Pages/ImageGallery/ImageGallery";

const LayoutRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contacta />} />
        <Route path="/GYM Winner's" element={<Winners />} />
        <Route path="/services" element={<ServicesCard />} />
        <Route path="/gallery" element={<ImageGallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default LayoutRoutes;
