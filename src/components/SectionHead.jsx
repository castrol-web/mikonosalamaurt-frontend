import React from 'react'
import "../components/navbar.css";

const SectionHead = (props) => {
  return (
    <div className='section__header'>
      <h2 className='section__title'>{props.title}<span className='section__icon'> {props.icon} </span></h2>
    </div>
  )
}

export default SectionHead;