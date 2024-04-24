import React from "react";

const Footer = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#464f1a" }}>
        <div className="row text-light">
          <div className="col d-flex justify-content-center align-items-center">
            <img
              src="https://tbnconference.icmanagement.id/tbn_content/uploads/2023/01/tbn-indonesia-logo-white.png"
              alt="logo"
              width="300px"
            />
          </div>
          <div className="col">
            <h4 className="text-center">Contact Us</h4>
            <p>
              Indonesia Team Impact Hub Lippo Thamrin Lt.5 #0503
              <br />
              Jl. M.H.Thamrin No.20, Menteng, Jakarta Pusat 10350, Indonesia.{" "}
              <br />
              WhatsApp: +6282310001908 <br />
              Email: info@tbnindonesia.org
            </p>
          </div>
          <div className="col text-center">
            <h4 className="text-center">Connect with Us</h4>
            <a href="https://www.instagram.com/tbn.indonesia/" target="_blank" rel="noreferrer">
              <img
                src="https://tbnindonesia.org/images/instagram-clr.svg"
                alt="instagram"
                width="50px"
              />
            </a>
            <a href="https://www.youtube.com/channel/UCnal-hHUTJRGKl5N0S79Gbg" target="_blank" rel="noreferrer" className="m-2">
              <img
                src="https://tbnindonesia.org/images/youtube-clr.svg"
                alt="youtube"
                width="50px"
              />
            </a>
            <a href="mailto:info@tbnindonesia.org" target="_blank" rel="noreferrer" className="m-2">
              <img
                src="https://tbnindonesia.org/images/envelope.svg"
                alt="email"
                width="50px"
              />
            </a>
            <a href="https://www.linkedin.com/in/tbn-indonesia-210705251/" target="_blank" rel="noreferrer" >
              <img
                src="https://tbnindonesia.org/images/linkedin-clr.svg"
                alt="linkedin"
                width="50px"
              />
            </a>
          </div>
        </div>
        <div
          className="text-center text-light p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2024 Group 4 MSIB Maxy Academy
        </div>
      </footer>
    </>
  );
};

export default Footer;
