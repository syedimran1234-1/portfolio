import "../styles/home.css"
import { useNavigate } from "react-router-dom";
import img1 from "/pic1.jpeg"

function Home() {
    const navigate = useNavigate();
    return (
        <div className="hero">
            <div className="heroContext">
                <div className="heroTopContext">
                    <h1>
                        Syed Imran Ahmed
                    </h1>
                    <h4>
                        Sr. Data Scientist Lead
                    </h4>
                </div>
                <div className="heroBottomContext">
                    <p className="heroBottonText">
                        Designing intelligent, scalable AI systems that translate data into business impact.
                    </p>
                    <p className="heroBottonSmallText">
                        Generative AI • Agentic AI • Machine Learning • Decision Intelligence
                    </p>
                </div>
                <div className="heroCta">
                    <button className="button1" onClick={() => navigate("/contact")}>
                        Contact
                    </button>
                    <button className="button2" onClick={() => navigate("/projects")}>
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