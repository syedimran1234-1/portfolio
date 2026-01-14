import { NavLink } from "react-router-dom";
import "../styles/Navbar.css"
import { FaBars } from 'react-icons/fa'
import { useContext } from "react";
import { AppContext } from "../context/Context";

export default function Navbar() {
  const { isOpen, setIsOpen } = useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="navName">
        <h3>Syed Imran Ahmed</h3>
      </div>
      <div className="navLinks">
        <NavLink className={"navLinksItem"} to="/">Home</NavLink>
        <NavLink className={"navLinksItem"} to="/about">About</NavLink>
        <NavLink className={"navLinksItem"} to="/Contact">Contact</NavLink>
      </div>
      <div className="burgerIcon">
        <button style={{width:"100%", height:"100%", background:isOpen? "#2c3e50" : "transparent" , borderRadius:"50%", zIndex:"1000"}} onClick={() => setIsOpen(!isOpen)} >
          <FaBars size={18} />
        </button>
      </div>
    </nav>
  );
}