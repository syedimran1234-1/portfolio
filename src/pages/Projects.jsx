import "../styles/project.css";

function Projects() {
    return ( 
        <div>
            <div className="patentsSection">
                <h2>Patents & Awards</h2>
                <div className="patentsCards">
                    <div className="patentCard">
                        <h3>Design of Robotic Arm</h3>
                        <p className="patentNumber">Design No. 355770-001 · Issued Dec 30, 2021</p>
                        <p className="patentDescription">
                            A robotic arm that is usually programmable, with functions similar to a human arm. 
                            Also awarded a design patent for "Design to Robotic ARM".
                        </p>
                    </div>
                    <div className="patentCard">
                        <h3>IoT and Machine Learning-based Robotic Digital Twin for Object Segregation</h3>
                        <p className="patentNumber">Patent Application No. 202141052936 · Filed Nov 15, 2021</p>
                        <p className="patentDescription">
                            Advanced system combining IoT and ML for robotic object segregation using digital twin technology.
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Projects;