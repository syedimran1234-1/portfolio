import "../styles/education.css";

function Education() {
  return (
    <div className="educationSection">

      <h1 className="sectionTitle">Education</h1>

      <div className="cardsContainer">

        <div className="cards">
          <h3>Ph.D.</h3>
          <p className="year">2025</p>
          <p>Bir Tikendrajit University</p>
          <p>Established by Government of Manipur under Section 2(f) of UGC Act 1956</p>
        </div>

        <div className="cards">
          <h3>M.E. – Digital Systems</h3>
          <p className="year">2021</p>
          <p>Muffakham Jah College of Engineering and Technology</p>
          <p>Affiliated with Osmania University</p>
          <p>Banjara Hills, Hyderabad</p>
        </div>

        <div className="cards">
          <h3>B.Tech – ECE</h3>
          <p className="year">2004</p>
          <p>Syed Hashim College of Science and Technology</p>
          <p>Affiliated with JNTU Hyderabad</p>
        </div>

        <div className="cards">
          <h3>Intermediate</h3>
          <p className="year">2000</p>
          <p>JVS Junior College</p>
          <p>Hyderabad, Telangana</p>
        </div>

        <div className="cards">
          <h3>SSC</h3>
          <p className="year">1998</p>
          <p>All Saints High School</p>
          <p>Gun Foundry, Hyderabad</p>
        </div>

      </div>

    </div>
  );
}

export default Education;