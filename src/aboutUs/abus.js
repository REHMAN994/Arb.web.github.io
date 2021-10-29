import React from "react";
import "./abus.css";
import backgroundImage from "../img/bg2.jpg";
import aboutus from "../img/aboutus-pix.png";
const AboutUs= () =>{
    return( 
        <>
            <section id="hero1" style={{backgroundImage:`url(${backgroundImage})`}}>
				<h1> ABOUT US</h1>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-8 col-md-6 col-lg-6  content-aboutUs">
							<div className="aboutus-pix center">
										<img src={aboutus} />
								
							</div>	
						</div>	
						<div className=" col-xs-12 col-sm-8 col-md-6 col-lg-6">
							<div className="asd">
								<h4>GET KNOW US</h4>
								<h2>WE DESIGN, BUILD BRANDS & DIGITAL PROJECTS</h2>
								<p>Far away, behind the word mountains, far from the countries vokalia and consonantia,there live the blind texts. separated they livein bookmarks grove right at the coast of thesemantics, a large language ocean. a smallriver named duden flows by their place and supplies it with the necessary regelialia. it is aparadisematic country, in which roasted parts ofsentences fly into your mouth.</p>
									<button type="button" className="btn">LEARN MORE</button>	
							</div>
									
						</div>
							
							
					</div>	
				</div>
			</section>
        </>

    )
}
export default AboutUs