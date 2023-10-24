import React, { useState } from 'react';
import "./navbar.css";
import logo from "../images/logo.png";
// import { useLocation} from 'react-router-dom';
import {Link} from "react-router-dom";
const Navbar = () => {
const [navshowing,setnavshowing] = useState(false);
function handlenavbar(){
    setnavshowing(true);
}



  return (
   
      <nav className="navbar navbar-expand-lg fixed-top navbar-light" id="navbar">
            <div className="container-fluid">
                {/* msd logo goes here */}
                <Link className="navbar-brand"  to="/"><img id="logo-nav" src={logo} alt="msd logo"></img></Link>
                {/* toggle icon for mobile device  */}
                <button className="navbar-toggler" onClick={handlenavbar} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={navshowing?"":"nav_content"} id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"  >
                            <a className="nav-link active" aria-current="page" href="/" >Home</a>
                        </li>
                        <li className="nav-item" id="navitem">
                            <a className="nav-link" aria-current="page" href="/about">About</a>
                        </li>
                        <li className="nav-item" id="navitem">
                            <a className="nav-link" aria-current="page" href="/gallery">Gallery</a>
                        </li>
            
                        <li className="nav-item" id="navitem">
                            <a className="nav-link" aria-current="page" href="/blogs">Blogs</a>
                        </li>
                        <li className="nav-item" id="navitem">
                            <a className="nav-link" aria-current="page" href="/contact">Contact</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                </div>
            </div>
        </nav>

  )
}

export default Navbar