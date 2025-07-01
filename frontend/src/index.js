import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingPage/home/HomePage";
import Signup from "./landingPage/signup/Signup";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutPage from "./landingPage/about/AboutPage";
import PricingPage from "./landingPage/pricing/PricingPage";
import ProductsPage from "./landingPage/products/ProductsPage";
import SupportPage from "./landingPage/support/SupportPage";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
