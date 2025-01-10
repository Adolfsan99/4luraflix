import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import HomePage from "./pages/home";
import NewVideo from "./pages/newvideo";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nuevo-video" element={<NewVideo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
