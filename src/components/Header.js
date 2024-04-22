import React from "react";

const Header = () => {
  return (
    <div
      id="carouselExampleDark"
      className=" carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="https://conference.tbnindonesia.org/assets/images/tbn-asia-conference-2023-photo-group_thumb.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <h1 className="text-light">
              Mengubah Wajah Digital, <br /> Membangun Transformasi Sosial
            </h1>
            <button className="btn btn-primary">
              <a
                href="https://tbnindonesia.org/"
                className="text-decoration-none text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More ➔
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="https://conference.tbnindonesia.org/assets/images/tbn-asia-conference-2023-photo-group_thumb.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <h1 className="text-light">TBN Asia Conference 2023</h1>
            <button className="btn btn-primary">
              <a
                href="https://conference.tbnindonesia.org/"
                className="text-decoration-none text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More ➔
              </a>
            </button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://conference.tbnindonesia.org/assets/images/tbn-asia-conference-2023-photo-group_thumb.jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block text-start">
            <h1 className="text-light">
              Transformational Sales Conference 2023
            </h1>
            <button className="btn btn-primary">
              <a
                href="https://salesconference.tbnindonesia.org/"
                className="text-decoration-none text-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More ➔
              </a>
            </button>
          </div>
        </div>
      </div>
      <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon text-white" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon text-white" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
  );
};

export default Header;
