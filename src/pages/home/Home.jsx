import React from 'react';
import "./home.css";
import MainHeader from '../../components/MainHeader';
import Programs from '../../components/Programs';
import FAQs from '../../components/FAQs';
import Testimonials from '../../components/Testimonials';
import AboutUs from '../../components/AboutUs';


const Home = () => {

  return (
<>
 <div>
      <MainHeader/>
      <AboutUs />
      <Programs/>
      <FAQs/>
      <Testimonials />
    </div>

</>

  )
}

export default Home;