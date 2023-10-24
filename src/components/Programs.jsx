import React from 'react'
import Card from '../UI/Card'
import services from '../data'
import { FaServicestack } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { AiFillCaretRight } from "react-icons/ai";
const Programs = () => {
  return (
    // programs section
    <div id='program-section'>
      <div className='services__header'>
        <SectionHead title="Our Services" icon=<FaServicestack /> />
        <p>Massa vitae tortor condimentum lacinia quis vel eros donec. Feugiat vivamus at augue <br></br>eget arcu dictum. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis</p>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
        {/* mapping services array with the card component created */}
        {services.map(({ id, image, title, text }) => {
          return <Card key={id} image={image} title={title} text={text} btnText="Enrol Here" btnIcon={<AiFillCaretRight />} className="service__card">
          </Card>
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default Programs;