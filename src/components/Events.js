import React from "react";
import NavbarSection from "./Navbar";
import Footer from "./Footer";

const Events = () => {
  const styles = {
    h1: {
      textDecoration: "underline",
      textDecorationColor: "#464f1a",
    },
    card: {
      backgroundColor: "#eef6c7",
      width: "500px",
    },
    img: {
      width: "300px",
      height: "400px",
    },
    button: {
      backgroundColor: "#c9e34a",
      fontWeight: "bold",
    },
    buttonHover: {
      backgroundColor: "#a0cf41",
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = styles.button.backgroundColor;
  };

  return (
    <>
      <NavbarSection />
      <div className="container mb-4">
        <h1 className="text-center p-2 m-4" style={styles.h1}>
          Upcoming Events
        </h1>
        <div className="row justify-content-center">
          <div className="col">
            <div className="card" style={styles.card}>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="https://www.tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg"
                  alt="tbn-asia-conference"
                  className="rounded"
                  style={styles.img}
                />
                <h5 className="card-title text-center">
                  TBN Asia Conference 2023
                </h5>
                <a
                  href="https://www.tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg"
                  className="btn"
                  style={styles.button}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Look up the conference
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={styles.card}>
              <div className="card-body d-flex flex-column align-items-center">
                <img
                  src="https://www.tbnindonesia.org/images/transformational-sales-conference-2023-.jpg"
                  alt="transformational-sales-conference-2023"
                  className="rounded"
                  style={styles.img}
                />
                <h5 className="card-title text-center">
                  Transformational Sales Conference 2023
                </h5>
                <a
                  href="https://www.tbnindonesia.org/images/transformational-sales-conference-2023-.jpg"
                  className="btn"
                  style={styles.button}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Look up the conference
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
