import React from "react";
import humanStudy from "../images/human-study.png";

const styles = {
  about: {
    backgroundColor: "#464f1a",
  },
  heading1: {
    textDecoration: "underline",
    textDecorationColor: "#eef6c7",
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
    height: "250px",
    width: "430px",
    margin: "auto",
    marginTop: "5px",
    marginBottom: "5px",
  },
  getInvolved: {
    backgroundColor: "#eef6c7",
  },
  headingInvolved: {
    textColor: "black",
    textDecoration: "underline",
    textDecorationColor: "#464f1a",
  },
  p:{
    textAlign: "justify",
  },
};

const AboutUs = () => {
  return (
    // About Section
    <>
      <div style={styles.about} id="about">
        <div className="container about-us">
          <div className="col text-center">
            <h2 className="text-light p-3 mb-2" style={styles.heading1}>
              About Us
            </h2>
            <h5 className="d-inline" style={styles.heading2}>
              Fighting Poverty Trough Enterprise
            </h5>
          </div>
          <div className="row p-5">
            <div className="col align-items-center d-flex justify-content-center mb-3">
              <img
                src="https://salesconference.tbnindonesia.org/assets/images/logo-tbni-white.png"
                alt="logo"
                width="300px"
              />
            </div>
            <div className="col text-light">
              <p style={styles.p}>
                TBN Indonesia, a social foundation that focuses on social
                transformation through entrepreneurship, has a website that is
                less than optimal in communicating its mission and vision and in
                attracting investors and partners. <br />
                <br />
                This results in a lack of and participation in TBN Indonesia's
                programmes, which affects the social impact it seeks to achieve
                social impact.
              </p>
            </div>
          </div>
        </div>

        {/* Vission and Mission */}

        <div className="row text-center align-content-center p-3">
          <div className="col text-center">
            <div className="card mb-3 mx-auto" style={styles.card}>
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title">Vission</h1>
                <p className="card-text">
                  “ uplift poverty through enterprise solutions. “
                </p>
              </div>
            </div>
          </div>
          <div className="col text-center">
            <div className="card mb-3 mx-auto" style={styles.card}>
              <div className="card-body d-flex flex-column justify-content-center">
                <h1 className="card-title">Mission</h1>
                <p className="card-text">
                  “ to help social enterprises in Southeast Asia that are
                  working to uplift poverty. “
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get Involved Section */}
      <div style={styles.getInvolved}>
        <h2 className="text-center p-3 mb-2" style={styles.headingInvolved}>
          <b>Get Involved</b>
        </h2>
        {/* invesment */}
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column justify-content-center">
              <h4><b>Invesment</b></h4>
              <p style={styles.p}>
                Are you an entrepreneur seeking funding or an investor
                interested in joining our network? We function as a strategic
                bridge connecting entrepreneurs and investors in Indonesia,
                offering distinctive investment services tailored to meet the
                market's needs.
              </p>
            </div>
            <div className="col">
              <img
                src="https://cdni.iconscout.com/illustration/free/thumb/free-concept-of-investment-and-saving-money-2112516-1785596.png"
                alt="invesment and saving"
              />
            </div>
          </div>
          {/* advisory */}
          <div className="row">
            <div className="col">
              <img
                src={humanStudy}
                alt="woman discussing in park"
              />
            </div>
            <div className="col text-end">
              <h4><b>Advisory</b></h4>
              <p style={styles.p}>
                Utilizing its core network and expertise, we have established an
                advisory entity that provides a wide range of key services.
                These services include research, capacity building, on-demand
                consultation, and educational content creation, all aimed at
                creating a positive impact for our extensive beneficiaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
