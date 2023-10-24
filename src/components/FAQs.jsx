import React from 'react';
import SectionHead from './SectionHead';
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../../src/datfl";
import FAQ from './FAQ';
import "../pages/home/home.css";
const FAQs = () => {
  return (
    <section className='faqs'>
      <div className='container faqs__container'>
        <div className='faq__header'>
          <SectionHead icon={<FaQuestion />} title="FAQs" />
        </div>
        <div className='faqs__wrapper'>
          {/* looping through all the faqs file */}
          {
            faqs.map(({ id, question, answer }) => {
              return <FAQ key={id} question={question} answer={answer} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default FAQs;