import "../styles/education.css"
import img3 from "/pic3.jpeg"

function Eduction() {
    return (
        <div className="educationSection">
            <div className="cardsContainer">
                <div className="cards">
                    <h1>
                        Education
                    </h1>
                    <h3>
                        B.Tech
                    </h3>
                    <h3>
                        M.E
                    </h3>
                    <h3>
                        PhD - Publications in AI
                    </h3>
                </div>
                <div className="cards">
                    <h1>
                        Certifications
                    </h1>
                    <h3>
                        Oracle Certified Professional 9i / 10g
                    </h3>
                    <h3>
                        RAC Certified Professional
                    </h3>
                    <h3>
                        Sun Solaris Certified
                    </h3>
                </div>
            </div>
            <div className="eduImageContainer">
                <img src={img3}/>
            </div>
        </div>
    );
}

export default Eduction;