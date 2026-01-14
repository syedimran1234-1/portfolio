import "../styles/about.css"
import img2 from "/pic2.jpeg"

function About() {
    return (
        <div className="aboutSection">
            <div className="abountImageContainer">
                <img src={img2} alt="image" />
            </div>
            <div className="aboutContext">
                <h1>
                    About Me
                </h1>
                <p className="aboutText">
                    Senior Data Scientist specializing in advanced analytics, machine learning, and Agentic AI systems.<br/><br/>
                    Experienced in transforming complex data into scalable, high-impact business solutions.
                </p>
                <p className="aboutText2">
                    <span>“</span>When passion becomes a career, you don't just excel, you become unstoppable.<span>”</span>
                </p>
            </div>
        </div>
    );
}

export default About;