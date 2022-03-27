import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";




ReactDOM.render(
  <Router>

    <Header />


    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />

    </Routes>

    <Footer />
  </Router >,

  document.getElementById("root")
);