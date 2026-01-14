import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import Eduction from "./pages/Education";
import Experties from "./pages/Experties";
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Soon from "./pages/Soon";
import SideBar from "./components/sideBar";
import { AppContext } from "./context/Context";


import './App.css'

function App() {
  const { isOpen } = useContext(AppContext);

  return (
    <>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Eduction />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experties" element={<Experties />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/soon" element={<Soon />} />
        </Routes>
      </div>
      <Footer />
      {isOpen && <SideBar />}
    </>
  )
}

export default App
