import { NavLink } from "react-router-dom";
import "../styles/sideBar.css";
import { useContext } from "react";
import { AppContext } from "../context/Context";

function SideBar() {
    const { setIsOpen } = useContext(AppContext);
    return (
        <>
            <div className="sideBar">
                <div>
                    <h2 className="sideBarTitle">Menu</h2>
                </div>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/education">Education</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/skills">Skills</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/experties">Expertise</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/projects">Projects</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/experience">Experience</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/soon">Blogs (soon)</NavLink>
                <NavLink onClick={() => { setIsOpen(false) }} className={"sideBarLinksItem"} to="/soon">Videos (soon)</NavLink>

            </div>
            <button onClick={() => { setIsOpen(false) }} className="sideBarBackgroundClick"></button>
        </>
    );
}

export default SideBar;