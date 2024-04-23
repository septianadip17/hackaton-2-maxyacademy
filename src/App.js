import React, {Component} from "react";
import NavbarSection from "./components/Navbar";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
class App extends Component {
  render(){
    return (  
      <div>
        <NavbarSection/>
        <Header/>
        <AboutUs/>
        <Events/>
        <Partners/>
        <Footer/>
      </div>
    );  
  }  
}  

export default App;
