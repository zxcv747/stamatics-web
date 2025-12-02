// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes later, e.g.:
        <Route path="/about" element={<About />} />
        <Route path="/competitions" element={<Competitions />} />
        */}
      </Routes>
    </div>
  );
}

export default App;
