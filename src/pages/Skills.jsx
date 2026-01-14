import { useState } from "react";
import "../styles/skills.css"

const Tab1 = () => {
    return (
        <div className="tabs">
            <div className="tabCards">
                <p>
                    Machine Learning
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Deep Learning
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Generative AI
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Agentic AI
                </p>
            </div>
            <div className="tabCards">
                <p>
                    NLP (NL → SQL, Chatbots)
                </p>
            </div>
        </div>
    )
}

const Tab2 = () => {
    return (
        <div className="tabs">
            <div className="tabCards">
                <p>
                    Python
                </p>
            </div>
            <div className="tabCards">
                <p>
                    R
                </p>
            </div>
            <div className="tabCards">
                <p>
                    SQL
                </p>
            </div>
            <div className="tabCards">
                <p>
                    PL/SQL
                </p>
            </div>
            <div className="tabCards">
                <p>
                    C / C++
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Unix shell
                </p>
            </div>
        </div>
    )
}

const Tab3 = () => {
    return (
        <div className="tabs">
            <div className="tabCards">
                <p>
                    Oracle 9i / 10g / 11g / 12c
                </p>
            </div>
            <div className="tabCards">
                <p>
                    RAC
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Performance Tuning
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Backup & Recovery
                </p>
            </div>
        </div>
    )
}

const Tab4 = () => {
    return (
        <div className="tabs">
            <div className="tabCards">
                <p>
                    Linux, Solaris, AIX
                </p>
            </div>
            <div className="tabCards">
                <p>
                    RMAN, OEM, AWR, ADDM
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Toad, Erwin, Data Junction
                </p>
            </div>
            <div className="tabCards">
                <p>
                    Power BI, Excel
                </p>
            </div>
        </div>
    )
}


function Skills() {
    const [tab, setTab] = useState("tab1")

    return (
        <div className="skillSection">
            <div className="skillTop">
                <h1>
                    Technical Skills
                </h1>
            </div>
            <div className="tabBar">
                <button onClick={() => setTab("tab1")}>
                    AI & Data
                </button>
                <button onClick={() => setTab("tab2")}>
                    Programming
                </button>
                <button onClick={() => setTab("tab3")}>
                    Databases
                </button>
                <button onClick={() => setTab("tab4")}>
                    Infra & Tools
                </button>
            </div>
            <>
                {
                    tab === "tab2" ? <Tab2 /> :
                        tab === "tab3" ? <Tab3 /> :
                            tab === "tab4" ? <Tab4 /> :
                                <Tab1 />
                }
            </>

        </div>
    );
}

export default Skills;