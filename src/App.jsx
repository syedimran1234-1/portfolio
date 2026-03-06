import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const container = document.querySelector(".mainContainer");

    let mouseX = 50;
    let mouseY = 50;

    let currentX = 50;
    let currentY = 50;

    let currentX2 = 60;
    let currentY2 = 40;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 100;
      mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    };

    const animate = () => {
      // Primary layer (closer to cursor)
      currentX += (mouseX - currentX) * 0.06;
      currentY += (mouseY - currentY) * 0.06;

      // Secondary layer (deeper, slower movement)
      currentX2 += (mouseX - currentX2) * 0.02;
      currentY2 += (mouseY - currentY2) * 0.02;

      container.style.setProperty("--x", `${currentX}%`);
      container.style.setProperty("--y", `${currentY}%`);
      container.style.setProperty("--x2", `${currentX2}%`);
      container.style.setProperty("--y2", `${currentY2}%`);

      requestAnimationFrame(animate);
    };

    container.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
