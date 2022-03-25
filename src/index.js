import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";

ReactDOM.render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />

    </Routes>
    <Hero />
    <Footer />
  </Router >,

  document.getElementById("root")
);