import React from "react";

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
    },
    buttonHover: {
      backgroundColor: "#a0cf41",
    }
  };

  return (
    <div className="container">
      <h1 className="text-center p-2 m-4" style={styles.h1}>Upcoming Events</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card mb-3" style={styles.card}>
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://www.tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg" alt="tbn-asia-conference" className="rounded" style={styles.img}/>
              <h5 className="card-title text-center">TBN Asia Conference 2023</h5>
              <a href="https://www.tbnindonesia.org/images/tbn-asia-conference-2023-2.jpg" className="btn" style={styles.button}>
                Look up the conference
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card mb-3" style={styles.card}>
            <div className="card-body d-flex flex-column align-items-center">
              <img src="https://www.tbnindonesia.org/images/transformational-sales-conference-2023-.jpg" alt="transformational-sales-conference-2023" className="rounded" style={styles.img} />
              <h5 className="card-title text-center">Transformational Sales Conference 2023</h5>
              <a href="https://www.tbnindonesia.org/images/transformational-sales-conference-2023-.jpg" className="btn" style={styles.button}>
              Look up the conference
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
