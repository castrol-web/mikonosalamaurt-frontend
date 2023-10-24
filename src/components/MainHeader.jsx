import React from 'react';
import { Link } from 'react-router-dom';
import "../pages/home/home.css";
import mum from "../images/mum.png";
import {FaCrown} from "react-icons/fa";

const MainHeader = () => {
    return (
        // making a pure html header file to contain text on left and image on the right
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className='main__header-left'>
                    <h1 className="Main__header-heading">Welcome To Mikono Salama Daycare</h1>
                    <h4>Knowledge With Discipline Make Kings <FaCrown /></h4>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        nostrud exercitation ullamco laboris nisi ut aliquip</p>
                    <Link to="/registration" type='button' className='btn btn-primary getStarted'>Get Started</Link>
                </div>
                <div className='main__header-right'>
                    <div className='main__header-circle'></div>
                    <div className='main__header-image'>
                        <img src={mum} alt="headerimage"></img>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader;