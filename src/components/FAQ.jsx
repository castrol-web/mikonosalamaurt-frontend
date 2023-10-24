import React from 'react'
import { useState } from 'react';
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineMinus} from "react-icons/ai";
import "../pages/home/home.css";
const FAQ = (props) => {
    const [isAnswerShowing,setAnswerShowing] = useState(false);
    return (
        // adding an onclick function to the article,getting the previous state and giving the opposite of the previus state
        <article className='faq' onClick={function(){setAnswerShowing( function(prev){return !prev})}}>
            <div>
                <h4>
                    {/* this prop is going to distructure every question in the array */}
                    {props.question}
                    <button type='button' className='faq__btn'>
                    {/* changing the button depending on the answer showing or not */}
                    {
                        isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus/>
                    }
                    </button>
                </h4>
            </div>
            {/* checking if the answer is showing or not  */}
            {isAnswerShowing && <p>{props.answer}</p>}
        </article>
    )
}

export default FAQ;