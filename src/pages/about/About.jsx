import React from 'react'
import "./about.css";
import Header from '../../components/Header';
import aboutImg from "../../images/aboutImg.jpg";
import classes from "../../images/classes.jpg";
import indoorplay from "../../images/indoorplay.jpg"
import havingfun from "../../images/havingfun.jpg"
const About = () => {
  return (
    <>
      <Header title="About Us" image={aboutImg}>
        Duis at consectetur lorem donec massa sapien faucibus et molestie. Mauris a 
        diam maecenas sed enim. Vel elit scelerisque mauris pellentes
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={classes} alt="Our story avatar "></img>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
             do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at 
             auctor urna nunc id cursus.<br></br> Consectetur adipiscing elit ut aliquam purus. Morbi non arcu risus
              quis varius quam quisque id. Urna neque viverra justo nec ultrices dui.
              </p>
            <p>
              Maecenas sed enim ut sem. Tristique senectus 
              et netus et malesuada fames ac turpis. Euismod quis viverra nibh
               cras pulvinar mattis. Ac tortor dignissim convallis aenean et tortor 
               at risus. Bibendum neque egestas congue quisque egestas. Ac placerat vestibulum lectus 
               mauris ultrices eros in cursus. Arcu bibendum
            </p>
            <p>
            aenean euismod elementum. Sed augue lacus viverra vitae iste dignissimos.
            Ultrices neque ornare?
            </p>
          </div>
        </div>
      </section>

      {/* vision section */}
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
             do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at 
             auctor urna nunc id cursus. <br></br>Consectetur adipiscing elit ut aliquam purus. Morbi non arcu risus
              quis varius quam quisque id. Urna neque viverra justo nec ultrices dui.
              </p>
            <p>
              Maecenas sed enim ut sem. Tristique senectus 
              et netus et malesuada fames ac turpis. Euismod quis viverra nibh
               cras pulvinar mattis. Ac tortor dignissim convallis aenean et tortor 
            </p>
          </div>
          <div className="about__section-image">
            <img src={indoorplay} alt="Our story avatar" ></img>
          </div>
        </div>
      </section>

      {/* Mission section */}
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={havingfun} alt="Our Mission avatar" ></img>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
             do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor at 
             auctor urna nunc id cursus. Consectetur adipiscing elit ut aliquam purus. Morbi non arcu risus
              quis varius quam quisque id. Urna neque viverra justo nec ultrices dui.
              </p>
            <p>
              Maecenas sed enim ut sem. Tristique senectus 
              et netus et malesuada fames ac turpis. Euismod quis viverra nibh
               cras pulvinar mattis. Ac tortor dignissim convallis aenean et tortor 
               at risus. Bibendum neque egestas congue quisque egestas. Ac placerat vestibulum lectus 
               mauris ultrices eros in cursus. Arcu bibendum
            </p>
            <p>
            aenean euismod elementum. Sed augue lacus viverra vitae iste dignissimos.
            Ultrices neque ornare?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About;