import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Customer from "./components/Customer";
import ScrollToTop from "./components/scrollToTop";
import Supplier from "./components/Supplier";
import DeliveryPartner from "./components/DeliveryPartner";

function App() {
  const [content, setContent] = useState({
    link: "tel:7003154707",
  });
  // Stop view Warnings
  const originalConsoleError = console.error;
  console.error = (message) => {
    if (message.startsWith("Warning:")) {
      return;
    }

    originalConsoleError(message);
  };

  window.onbeforeunload = function () {
    sessionStorage.setItem("activeIndex", "0");
  };

  const mailLink = () => {
    window.open("mailto:contact@betatesters.tech");
  };
  const phoneLink = () => {
    window.open("tel:7003154707");
  };

  return (
    <BrowserRouter>
      <Navbar link={content.link} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home mailLink={mailLink} phoneLink={phoneLink} />} />
        <Route path="/customer" element={<Customer mailLink={mailLink} phoneLink={phoneLink} />} />
        <Route path="/supplier" element={<Supplier mailLink={mailLink} phoneLink={phoneLink} />} />
        <Route path="/delivery-partner" element={<DeliveryPartner mailLink={mailLink} phoneLink={phoneLink} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
