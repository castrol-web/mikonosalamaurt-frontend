import React from 'react'
import { useState } from 'react';
import SectionHead from './SectionHead';
import { ImQuotesLeft } from "react-icons/im";
import Card2 from '../UI/Card2';
import { testimonials } from "../../src/datfl";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import "../pages/home/home.css";



const Testimonials = () => {
  // distructuring the array here
  // 1.getting the index with useState
  const [index, setIndex] = useState(0);
  // 2.distructuring the array since it is an object,getting the first object of the array
  const { name, job, quote, avatar } = testimonials[index];


  //function for the two buttons in the testimonial
function prevTestimonial(){
  // calling the setindex method 
  setIndex(function(prev){
    return prev - 1; 
  });
  if(index <= 0){
    setIndex(testimonials.length -1);
  }
}


function nextTestimonial(){
setIndex(function(prev){
  return prev + 1;
  // preventing the error in falling out of the index array of testimonials
});
if(index >= testimonials.length - 1){
  setIndex(0);
}
}

  return (
    <section className='testimonials'>

      <div className='container testimonials__container'>
      <div className='testimonials__header'>
        <SectionHead icon={<ImQuotesLeft />} title="Testimonials"/>
        </div>
        <Card2 className="testimonial_card">
          <div className="testimonial__avatar">
            <img src={avatar} alt='testimonial_avatar' />
          </div>
          <p className='testimonial__quote'>
            {`"${quote}"`}
          </p>
          <h5>{name}</h5>
          <small className='testimonial__title'>{job}</small>
        </Card2>
        <div className='testimonial__btn-container'>
        {/* buttons will have a function that is going to trigger the previous and the next testimonials */}
          <button className='testimonials__btn'  onClick={prevTestimonial}> <IoIosArrowDropleftCircle /> </button>
          <button className='testimonials__btn'  onClick={nextTestimonial}> <IoIosArrowDroprightCircle /> </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;