// import React , {useState} from "react"
// import "./nav.css";
// import { IoMdClose } from "react-icons/io";
// import { FiMenu } from "react-icons/fi";
// import NavLinks from "./navLinks"; 
 
// const MobNav = () =>{

//   const[Open , setOpne] = useState (false);
//   const closeIcon = <IoMdClose size={25} className="NavMenu" onClick={() => setOpne(!Open) } />
//   const hamburgericon = <FiMenu size={25} className="NavMenu" onClick={() => setOpne(!Open) } />


//   return (
//     <> 
//       <nav>
//       {Open ? closeIcon : hamburgericon}
//       {Open && <NavLinks />}
//       </nav>

//     </>
//   )
// }

// export default MobNav