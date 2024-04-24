import React from 'react';

const Partners = () => {
  return (
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container-fluid" style={{ backgroundColor: "beige" }}>
            <div className="row align-items-center" style={{ height: "100vh", overflowX: "hidden" }}>
              <div className="col-sm-12" style={{ display: "flex", justifyContent: "flex-start" }}>
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg" alt="..." />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg" alt="" />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2021/03/04/11/37/coast-6067736__340.jpg" alt="" />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/06/45/danube-river-7522608__340.jpg" alt="" />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/07/09/06/bridge-7504605__340.jpg" alt="..." />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/21/23/cat-7523894__340.jpg" alt="" />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2021/03/04/11/37/coast-6067736__340.jpg" alt="" />
                <img className="col-sm-3" src="https://cdn.pixabay.com/photo/2022/10/15/06/45/danube-river-7522608__340.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2022/09/24/16/32/bulldog-7476727__340.jpg" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2021/03/04/11/37/coast-6067736__340.jpg" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Partners;
