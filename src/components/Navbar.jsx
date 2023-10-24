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
                            <Link className="nav-link active" aria-current="page"  to="/">Home</Link>
                        </li>
                        <li className="nav-item" id="navitem">
                            <Link className="nav-link" aria-current="page"  to="/about">About</Link>
                        </li>
                        <li className="nav-item" id="navitem">
                            <Link className="nav-link" aria-current="page"  to="/gallery">Gallery</Link>
                        </li>
            
                        <li className="nav-item" id="navitem">
                            <Link className="nav-link" aria-current="page"  to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item" id="navitem">
                            <Link className="nav-link" aria-current="page"  to="/contact">Contact</Link>
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