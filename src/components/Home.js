import React, {Component} from "react";
import NavbarSection from "./Navbar"
import Header from "./Header";
import AboutUs from "./AboutUs";
import Events from "./Events";
import Footer from "./Footer";
import Faq from "./Faq";

class Home extends Component {
  render(){
    return (  
      <>
        <NavbarSection/>
        <Header/>
        <AboutUs/>
        <Events/>
        <Faq/>
        <Footer/>
        <div className="fixed-bottom right-100 p-3" style={{zIndex: "6", left: "initial"}}>
        <a href="https://wa.me/6282310001908?text=Hello, How can i help you?" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="wa kami" width="60"/>
        </a>
      </div>
      </>
    );  
  }  
}  

export default Home;