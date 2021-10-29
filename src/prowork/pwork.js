import React from "react";
import "./pwork.css";
import backgroundImage from "../img/bg4.jpg";

const ProWork = () => {
    return (
        <>
            <section id="hero3" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div class="container">
			<div class="row">
				<div class=" col-sm-12 col-lg-12">
					<h1> WORK PROCESS</h1>
					<br/>
					<div class="service1">
						<h3>DESIGNING & DEVELOMENT</h3>
						<p>We Define Goals Analyze Requirements And Make Projects Shadule</p>
						
					</div>
				</div>
			    <div class="col-sm-8 col-lg-4">
					<div class="service2">
						<h3>INFOMATION GATHRING</h3>
						<p>We Define Goals Analyze Requirements And Make Projects Shadule</p>
					</div>

				</div>
			
				<div class="col-sm-12 col-lg-8">
					<div class="service3" style={{justifyContent: 'end', marginTop:'44px'}}>
						<h3>STRATEGY & PLANING</h3>
						<p>We Define Goals Analyze Requirements And Make Projects Shadule</p>
						
					</div>
				</div>
			
				<br/>
			
			    <div class="col-lg-10">
					<div class="service4">
						<h3>LAUNCH & MAINTAINCES</h3>
						<p>We Define Goals Analyze Requirements And Make Projects Shadule</p>
						
					</div>
				</div>
				
			</div>

		</div>
            </section>
        </>
    )

}
export default ProWork