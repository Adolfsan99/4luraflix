import "./App.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

import HomePage from "./pages/home";
import NewVideo from "./pages/newvideo";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nuevo-video" element={<NewVideo />} />
        </Routes>
      </Router>
    <Footer />
    </>
  );
}

export default App;
