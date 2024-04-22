import React from "react";

const styles = {
  about: {
    backgroundColor: "#464f1a",
  },
  heading1: {
    textDecoration: "underline",
    textDecorationColor: "#eef6c7",
    textDecorationSkipInk: "auto"
  },
  heading2: {
    backgroundColor: "#eef6c7",
    padding: "0.5rem 1rem", 
    borderRadius: "10px",
    color: "#464f1a",
  },
  card: {
    backgroundColor: "#c9e34a",
    color: "#464f1a",
    height: "200px"
  }
  
};

const AboutUs = () => {
  return (
    // About Section
    <div style={styles.about}>
      <div className="container about-us">
        <div className="col text-center">
        <h2 className="text-light p-3 mb-2" style={styles.heading1}>About Us</h2>
        <h4 className="d-inline" style={styles.heading2}>Fighting Poverty Trough Enterprise</h4>
        </div>
        <div className="row p-5">
          <div className="col align-items-center d-flex justify-content-center mb-3">
            <img src="https://salesconference.tbnindonesia.org/assets/images/logo-tbni-white.png" alt="logo" width="300px" />
          </div>
          <div className="col text-justify text-light">
            <p>
              TBN Indonesia, a social foundation that focuses on social transformation through entrepreneurship, has a website that is less than optimal in communicating its mission and vision and in attracting investors and partners. <br /><br />This results in a lack of and participation in TBN Indonesia's programmes, which affects the social impact it seeks to achieve social impact.
            </p>
          </div>
        </div>
      </div>

      {/* Vission and Mission */}
      <div className="row text-center align-content-center p-5">
        <div className="col">
          <div class="card mb-3" style={styles.card}>
            <div class="card-body">
              <h1 class="card-title">Vission</h1>
              <p class="card-text">“ uplift poverty through enterprise solutions. “    </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card mb-3" style={styles.card}>
            <div class="card-body">
              <h1 class="card-title">Mission</h1>
              <p class="card-text">“ to help social enterprises in Southeast Asia that are working to uplift poverty. “</p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div className="container get-involved">

        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
