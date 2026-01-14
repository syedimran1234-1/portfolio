import icon1 from "/icons/icon1.png"
import icon2 from "/icons/icon2.png"
import icon3 from "/icons/icon3.png"
import icon4 from "/icons/icon4.png"
import icon5 from "/icons/icon5.png"
import icon6 from "/icons/icon6.png"
import "../styles/expertise.css"

function Expertise() {
    return ( 
        <div className="expertiseSection">
            <h1 className="expertiseTitle">
                Core Experties
            </h1>
            <div className="expertiseCards">
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon1} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            Agentic AI & Autonomous Systems
                        </p>
                    </div>
                </div>
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon2} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            Machine Learning & Deep Learning
                        </p>
                    </div>
                </div>
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon3} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            End-to-End Model Deployment
                        </p>
                    </div>
                </div>
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon4} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            Predictive Modeling & Advanced Analytics
                        </p>
                    </div>
                </div>
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon5} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            Business Problem Translation & Impact
                        </p>
                    </div>
                </div>
                <div className="expCard">
                    <div className="iconContainer">
                        <img src={icon6} alt="icon"/>
                    </div>
                    <div className="expCardContext">
                        <p>
                            Data Strategy & Decision Intelligence
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Expertise;