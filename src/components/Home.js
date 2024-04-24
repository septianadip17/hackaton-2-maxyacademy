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
      </>
    );  
  }  
}  

export default Home;