import React from "react";
import NavbarSection from "../components/Navbar";
import Footer from "../components/Footer";

const styles = {
  card: {
    backgroundColor: "#c9e34a",
  },
}

const Blog = () => {
  return (
    <div>
      <NavbarSection />
      <div className="container">
        <div className="container p-5" style={{ backgroundColor: "#edf9b3" }}>
          <div className="row mt-5">
            <div className="col">
              <img
                src="https://asset-2.tstatic.net/wartakota/foto/bank/images/pungut-sampah-ciliwung.jpg"
                alt=""
                className="img-fluid rounded"
              />
            </div>
            <div className="col align-self-center">
              <h1>
                TBN Indonesia Menjadi Jembatan Para Social Entrepreneurship
              </h1>
              <h4>Dunia yang saat ini kita huni semakin</h4>
              <button className="btn btn-success"><a href="/blog/article1" style={{textDecoration: "none", color:"white"}}>See More ➔</a></button>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="text-center pt-3"><u>Our Blog</u></h1>
          <div className="card-group m-auto gap-4 mb-4" >
            <div className="card" style={styles.card}>
              <img
                src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2Fb5079b4e-c4e6-11ed-bd5d-fb821bb192f5.jpg?crop=1728%2C972%2C18%2C24"
                alt=""
                className="card-img-top p-3 rounded"
              />
              <div className="card-body">
                <div className="card-title">
                  <h5>TBN Indonesia Menjadi J...</h5>
                </div>
                <div className="card-text">
                  <p>
                    Dunia yang saat ini kita huni semakin hancur yang nyatanya
                    diakibatkan oleh diri kita sendiri.
                  </p>
                </div>
              </div>
            </div>
            <div className="card" style={styles.card}>
              <img
                src="https://image1.masterfile.com/getImage/NjExMy0wOTI0MDI2OWVuLjAwMDAwMDAw=AK1BY6/6113-09240269en_Masterfile.jpg"
                alt=""
                className="card-img-top p-3 rounded"
              />
              <div className="card-body">
                <div className="card-title">
                  <h5>TBN Indonesia Menjadi J...</h5>
                </div>
                <div className="card-text">
                  <p>
                    Dunia yang saat ini kita huni semakin hancur yang nyatanya
                    diakibatkan oleh diri kita sendiri.
                  </p>
                </div>
              </div>
            </div>
            <div className="card" style={styles.card}>
              <img
                src="https://www.flowstobay.org/wp-content/uploads/2020/08/Littler-Girl-Picking-up-Litter.jpg"
                alt=""
                className="card-img-top p-3 rounded"
              />
              <div className="card-body">
                <div className="card-title">
                  <h5>TBN Indonesia Menjadi J...</h5>
                </div>
                <div className="card-text">
                  <p>
                    Dunia yang saat ini kita huni semakin hancur yang nyatanya
                    diakibatkan oleh diri kita sendiri.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
