import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components/molecules";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
