import React from 'react'
import "../pages/home/home.css";
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (

        // card below is a bootstrap card
            <div className="col">
                <div className="card ">
                    <img src={props.image} className="card-img-top" alt="0-1 years of ages kid"></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    <div className='enrol_btn'>
                        <Link className="btn btn-primary" type='button' to="/registration">{props.btnText} {props.btnIcon}</Link>
                    </div>
                </div>
            </div>
    )
}

export default Card