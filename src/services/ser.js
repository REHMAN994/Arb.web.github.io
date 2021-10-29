import React from 'react';
import "./ser.css";
import backgroundImage from "../img/bg3.jpg";
import uiSVG from "../img/ui.svg";
import dgSVG from "../img/GD.svg";
import smSVG from "../img/socialmedia.svg";
import wnmSVG from "../img/webNmob.svg";
const Services = () => {
    return (
        <>
         <section id="hero2" style={{backgroundImage:`url(${backgroundImage})`}}>
	<h1> SERVICES</h1>
		<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-8 col-lg-6 col-lg-6">
									
									<div className="row">
										<div className=" col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-4"></div>
										<div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4 " >
											<div className="  card-One center">
  										<img src={uiSVG}  alt="..." style={{width:' 9rem', height: '33px'}}/>
  										<h4 className="c-heading">UI/UX Design</h4>

  										<div className="card-bodyy text-center">
   										 	<p className="card-text">providing good quality customers experience and support is a important powering top grade products or service to your customers however it has been noted</p>
  										</div>
									</div>

									<div className="  card-One">
  										<img src={dgSVG}  alt="..." className="center" style={{width: '9rem', height: '33px'}}/>
	  										<h4 className="c-heading">Graphic Design</h4>

  										<div className="card-bodyy text-center">
   										 	<p className="card-text">providing good quality customers experience and support is a important powering top grade products or service to your customers however it has been noted</p>
  										</div>
									</div>
										</div>
										<div className=" col-xs-12 col-sm-12 col-md-5 col-lg-5 col-xl-4">
											<div className="  card-two">
	  											<img src={smSVG}  alt="..." className="center" style={{width: '9rem', height: '33px', margin:' 1px'}}/>
	  											<h4 className="c-heading">SOCIAL MARKETING</h4>
	  											<div className="card-bodyy text-center">
	   										 		<p className="card-textt text-center">providing good quality customers experience and support is a important powering top grade products or service to your customers however it has been noted</p>
	  											</div>
											</div>

											<div className="card-twoo">
			  									<img src={wnmSVG}  alt="..." className="center" style={{width:' 9rem', height:' 29px', margin:' 1px'}}/>
			  										<h4 className="c-heading">WEB & MOBILE <br/> DEVELOPMENT</h4>
			  										<div className="card-bodyy text-center">
			   										 	<p className="card-textt text-center">providing good quality customers experience and support is a important powering top grade products or service to your customers however it has been noted</p>
			  										</div>
											</div>
										</div>
								</div>
					</div>	
							

							<div className="col-xs-12 col-sm-8 col-md-6 col-lg-6 center">
								<div className="contant">
									<h4>WE OFFER</h4>
								<h2>Awsome Custom Service We Provide</h2>
								<p>providing good quality customers experience and 
									support is as important powering top grade 
									products or service to your customers however it has been noted
								</p>
									<button type="button" className="btn">LEARN MORE</button>
							</div>
								
					</div>
				</div>
					
		</div>
	</section>
        </>
    )
}

export default Services;
