import React, { useState } from "react";
import "./nav.css";

import { FiMenu, FiToggleLeft } from "react-icons/fi";
import { NavLink } from "react-router-dom";

// import MobNav from "./mobNav";
import NavLinks from "./navLinks";
import Tablet from "./tab";
import $ from 'jquery';

// const navbarNavAltMarkup = document.getElementById ('navbarNavAltMarkup');
//  document.onclick = function(e){
// 	 if(e.target.id !== "navbarNavAltMarkup" && e.target.id !== "toggle")
// 	 {
// 		navbarNavAltMarkup.classList.remove('active')
// 	 }
//  }





const Nav = (props) => {
	// const [manuClicked, setManuClicked] = useState(false);

	// const toggleManuClick = () => {
	// 	setManuClicked(!manuClicked);

	// }
	const [isOpen, setisOpen] = useState(false);
	// <script type="text/javascript">
	// 	$('.js-scroll-trigger').click(function() {
	// 		$('.navbar-collapse').collapse('hide');
	// 	});
	// </script>
	
	// $(function(){ 
	// 			var navMain = $("#navbarNavAltMarkup");
	// 			navMain.on("click", "a", null, function () {
	// 				navMain.collapse('hide');
	// 			});
	// 		});

	// $(function(){ 
	// 	var navMain = $("#navbarNavAltMarkup"); // avoid dependency on #id
	// 	// "a:not([data-toggle])" - to avoid issues caused
	// 	// when you have dropdown inside navbar
	// 	navMain.on("click", "a:not([data-toggle])", null, function () {
	// 		navMain.collapse('hide');
	// 	});
	// });

	return (

		
		// <nav className="navbar navbar-expand-lg navbar-light position-fixed md-4">
		// 	<a className="navbar-brand" href="#">Navbar</a>
		// 	{/* {manuClicked? (
		// 		<IoMdClose size={25} className="NavMenu" data-target="#mobNav" onClick={toggleManuClick}/>
		// 	) : (
		// 		<FiMenu size={25} className="NavMenu" onClick={toggleManuClick} />
		// 	)} */}

		// 	<button onClick={() => { setisOpen(!isOpen) }} className="navbar-toggler ml-auto" type="button" data-toggle="collapse"   >
		// 		<span className="navbar-toggler-icon"></span>
		// 	</button>
		// 	{/* {isOpen && <NavLinks/>} */}
		// 	<NavLinks display={isOpen} />
		// 	<div className="collapse navbar-collapse text-right" id="navbarNavAltMarkup" >
		// 		<div className="nav-link">
		// 			<ul>
		// 				<li className="nav-item active">
		// 					<a className="nav-linkk" href="#">HOME</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-linkk" href="#hero1">ABOUT US</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-linkk" href="#hero2">SERVICES</a>
		// 				</li>
		// 				<li className="book-a-table"><a href="#hero4">CONTACT US</a></li>
		// 			</ul>
		// 		</div>
		// 	</div>

		// </nav>

	

		<nav className="navbar navbar-expand-lg navbar-light navbar-New collapseOnSelect " >
			<a className="navbar-brand" href="#" >Navbar</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			
			<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				<div className="navbar-nav ">
					<a className="nav-item  item " href="#">HOME</a>
					<a className="nav-item  item " href="#hero1">ABOUT US</a>
					<a className="nav-item  item " href="#hero2">SERVICES</a>
					<a className="nava-item  book-a-table " href="#hero4">CONTACT US</a>
				</div>
			</div>
			
		</nav>


	)
	

}
   
  

export default Nav;