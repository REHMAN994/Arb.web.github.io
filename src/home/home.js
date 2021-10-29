import React from "react";
import "./home.css";
import backgroundImage from "../img/bg.jpg";
const Banner = () =>{
    return(
        <div className="baner-area" id="home" style={{backgroundImage:`url(${backgroundImage})`}}>

				<section id="hero" className="align-items-center">
					<div className="container  text-center">
						<div className="row">
							<div className="col-md-12 col-lg-12   text-center">
								<h3 className="choti"> WEB DEVELOPMENT AGENCY</h3>
								<h1>Work With Expert Who Can Deliver World-Class Services</h1>
								<button type="button" className="btn ">CONTACT US</button>
							</div>
							
						</div>
					</div>
				</section>
		</div>
    )

}
export default Banner;