import React from "react";
import NavbarSection from "../Navbar";
import Footer from "../Footer";

const Article1 = () => {
  return (
    <div>
      <NavbarSection />
      <div className="container">
      <h1 className="text-center pt-5">TBN Indonesia Menjadi Jembatan Para Social Entrepreneurship</h1>
      <img src="https://asset-2.tstatic.net/wartakota/foto/bank/images/pungut-sampah-ciliwung.jpg" alt="memungut sampah" className="img-fluid rounded mx-auto d-block m-5"/>
      <p>
        Dunia yang saat ini kita huni semakin hancur yang nyatanya diakibatkan
        oleh diri kita sendiri. Ditambah dengan tingkat kemiskinan kian meninggi
        dan semakin brutalnya ekspliotasi alam di bumi tercinta ini. Dengan
        semakin buruknya dampak sosial yang terjadi maka TBN Indonesia hadir
        untuk menjadi jembatan para Social Entrepreneurship untuk berkolaborasi.
        Saling bekerjasama demi menemukan solusi yang terbaik untuk bumi
        tercinta ini. Dengan mengusung Reuse – Reduce – Recycle.
      </p>
      <p>
        Bersama TBN Indonesia mewujudkan bumi tercinta ini yang lebih sehat dan
        hijau. Green Technology menjadi fokus TBN Indonesia agar para Social
        Entrepreneurship lebih mengutamakan ramah lingkungan dan memanfaatkan
        barang daur ulang. Dengan berkembangnya Digital Technology menjadikan
        TBN Indonesia selalu mengupayakan berkolaborasi dengan para Social
        Entrepreneurship yang memfokuskan teknologi digital sebagai pintu masuk
        masa depan.
      </p>
      <p>
        Mari berkolaborasi untuk mengentaskan kemiskinan melalui para Social
        Entrepreneurship dan tetap menjadikan bumi tercinta ini terjaga
        keasriannya.
      </p>
      </div>
      <Footer />
    </div>
  );
};

export default Article1;
