import  React from "react";

import Nav from "./navbar/nav";
import Banner from "./home/home";
import AboutUs from "./aboutUs/abus";
import ProWork from "./prowork/pwork";
import WebDesign from "./design/webDesign";
import Services from "./services/ser";
import ContactUs from "./contactUs/conUs";
import Footer from "./footer/footer";

function App() {
  return (
    <>
      <Nav/>
      <Banner/>
      <AboutUs/>
      <Services/>
      <WebDesign/>
      <ProWork/>
      <ContactUs/>
      <Footer/>
      
    </>
  );
}

export default App;
