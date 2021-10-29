import React from "react";
import "./webDesign.css";
import backgroundImage from "../img/bg2.jpg";
import Pix1 from "../img/pix1.png";
import Pix2 from "../img/pix2.png";
const WebDesign = () =>{
    return(
        <>
        <section id="hero6" style={{backgroundImage:`url(${backgroundImage})`}}>
            <h1> WEB DESIGN</h1>
                <div className="container">
                    <div className="row">
                        <div className=" col-xs-12  col-sm-6 col-md-6 col-lg-6  col-xl-6 center letf">
                            <div className="asd">
                                <h2>Creative Web Designs</h2>
                                <p>Far away, behind the word mountains, far from the countries vokalia and consonantia,there live the blind texts. separated they livein bookmarks grove right at the coast of thesemantics, a large language ocean. a smallriver named duden flows by their place and supplies it with the necessary regelialia.</p>
                                <button type="button" className="btn">Learn more</button>
                            </div>
                        </div>
                        <div className=" col-xs-12  col-sm-6 col-md-6 col-lg-6  col-xl-6 right">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" >
                                    <div className="carousel-item active " >
                                        <img className="d-block w-100 pix1" src={Pix1} alt="First slide"
                                            />
                                    </div>
                                    
                                    <div className="carousel-item"  >
                                        <img className="d-block w-100 pix2" src={Pix2} alt="Second slide" 
                                             />
                                        
                                    </div>

                                </div>

                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" >
                                    <span className="carousel-control-next-icon" aria-hidden="true"  style={{color:'red'}}></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
			            </div>
                     </div>
                </div>
        </section>
    </>

    )
}
export  default WebDesign