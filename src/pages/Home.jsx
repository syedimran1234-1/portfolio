import "../styles/home.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import img1 from "/pic1.jpeg";

function Home() {
    const navigate = useNavigate();

    const [stage, setStage] = useState(0);

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    const fullName = "Syed Imran Ahmed";
    const fullDesc =
        "Designing intelligent, scalable AI systems that translate data into business impact.";

    // Stage 0 → Type Name
    useEffect(() => {
        if (stage !== 0) return;

        let i = 0;
        const interval = setInterval(() => {
            setName(fullName.slice(0, i + 1));
            i++;
            if (i === fullName.length) {
                clearInterval(interval);
                setTimeout(() => setStage(1), 400);
            }
        }, 18);

        return () => clearInterval(interval);
    }, [stage]);

    // Stage 2 → Type Description
    useEffect(() => {
        if (stage !== 2) return;

        let i = 0;
        const interval = setInterval(() => {
            setDesc(fullDesc.slice(0, i + 1));
            i++;
            if (i === fullDesc.length) {
                clearInterval(interval);
                setTimeout(() => setStage(3), 300);
            }
        }, 15);

        return () => clearInterval(interval);
    }, [stage]);

    // Move stages forward
    useEffect(() => {
        if (stage === 1) {
            setTimeout(() => setStage(2), 500);
        }
    }, [stage]);

    return (
        <div className="hero">
            <div className="heroContext">
                <div className="heroTopContext">
                    <h1>
                        {name}
                        {stage === 0 && <span className="cursor">|</span>}
                    </h1>

                    <h4 className={`role ${stage >= 1 ? "visible" : ""}`}>
                        Sr. Data Scientist Lead
                    </h4>
                </div>

                <div className="heroBottomContext">
                    <p className="heroBottonText">
                        {desc}
                        {stage === 2 && <span className="cursor">|</span>}
                    </p>

                    <p className={`heroBottonSmallText ${stage >= 3 ? "visible" : ""}`}>
                        Generative AI • Agentic AI • Machine Learning • Decision Intelligence
                    </p>
                </div>

                <div className={`heroCta ${stage >= 3 ? "visible" : ""}`}>
                    <button
                        className="button1"
                        onClick={() => navigate("/contact")}
                    >
                        Contact
                    </button>
                    <button
                        className="button2"
                        onClick={() => navigate("/projects")}
                    >
                        Explore Projects
                    </button>
                </div>
            </div>

            <div className="heroImage">
                <div className="imageContainer">
                    <img src={img1} alt="Hero" />
                </div>
            </div>
        </div>
    );
}

export default Home;