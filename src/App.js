import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import Analysis from "./Analysis/Analysis";
import AtPS from "./Analysis/analysis-units/AtPS";
import Probability from "./Analysis/analysis-units/Probability";
import Polar from "./Analysis/analysis-units/Polar";
import Vectors from "./Analysis/analysis-units/Vectors";
import Growth from "./Analysis/analysis-units/Growth";
import Matrices from "./Analysis/analysis-units/Matrices";
import GAtM from "./Analysis/analysis-units/GAtM";
import Calculus from "./Analysis/analysis-units/Calculus";
import Midterms from "./Analysis/analysis-units/Midterms";
import About from "./Header/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Analysis />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/analysis/atps" element={<AtPS />} />
        <Route path="/analysis/probability" element={<Probability />} />
        <Route path="/analysis/polar" element={<Polar />} />
        <Route path="/analysis/vectors" element={<Vectors />} />
        <Route path="/analysis/growth" element={<Growth />} />
        <Route path="/analysis/matrices" element={<Matrices />} />
        <Route path="/analysis/gatm" element={<GAtM />} />
        <Route path="/analysis/calculus" element={<Calculus />} />
        <Route path="/analysis/midterms" element={<Midterms />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
