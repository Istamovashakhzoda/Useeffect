import React from "react";
import { Link, useLocation } from "react-router-dom";


const Home =() =>{
  const loc = useLocation()
  return(
    <div className="home"  style={{textAlign:"center"}}>
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
    <h1>Home Page</h1>
    <p style={{fontSize:"20px",textAlign:"center",color:"darkblue"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae eveniet quibusdam autem aut. Officiis aliquam dolorum, modi dolore veritatis libero labore, esse voluptatum omnis qui error illum. Neque, accusamus omnis?</p>
  </div>
  )
}

export default Home