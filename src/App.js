import React from "react";
import { Route, Routes } from "react-router-dom";
import { PortfolioProvider } from "./context/PortfolioContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  return (
    <PortfolioProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    </PortfolioProvider>
  );
}

export default App;
