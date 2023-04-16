import React from "react";
import { Link, useLocation } from "react-router-dom";

const About = () =>{
  const loc = useLocation()
  return(
    <div className="about" style={{textAlign:"center"}}>
     <div className="href" >
      <ul style={{display:"flex" ,textDecoration:"none", gap:"10px", listStyle:"none", fontSize:"29px"}}>
        <li>
          <Link to={"/"} style={{color: loc.pathname == "/" ? "#1c64F2" :"black"}}>
          Home
          </Link>
        </li>
        <li>
          <Link to={"/about"} style={{color: loc.pathname == "/about" ? "#1c64F2" :"black"}}>
            About
          </Link>
        </li>
     <li>
      <Link to={"/main"} style={{color: loc.pathname == "/main" ? "#1c64F2" :"black"}}>
      Main
      </Link>
     </li>
      </ul>
      </div>
      <h1>About Section</h1>
    </div>
  )
}

export default About