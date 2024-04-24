import React, {Component} from "react";
import NavbarSection from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Article1 from "./components/Articles/Article1";
import Blog from "./components/Blog";
class App extends Component {
  render(){
    return (  
      <>
      <div>
        <NavbarSection/>
        <Header/>
        <AboutUs/>
        <Events/>
        <Faq/>
        <Footer/>
        <Article1/>
        <Blog/>
      </div>
      <div className="fixed-bottom right-100 p-3" style={{zIndex: "6", left: "initial"}}>
        <a href="https://wa.me/6282310001908?text=Hello, How can i help you?" target="_blank" rel="noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="wa kami" width="60"/>
        </a>
      </div>
      </>
    );  
  }  
}  

export default App;