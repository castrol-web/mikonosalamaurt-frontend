import React from 'react'
import { Link } from 'react-router-dom';
function AboutUs() {
    return (
        <section className="about-us">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis est nec ex ultrices, vel feugiat ipsum aliquet. Mauris at dui at tortor vestibulum congue sed vitae est. Donec sollicitudin arcu eu dolor aliquet, non egestas turpis eleifend. Vestibulum consectetur velit vel metus aliquet, et tincidunt arcu consectetur. Sed id justo ac risus ultricies volutpat a a metus. Curabitur ac orci eget lorem consequat rutrum. Nulla tempus a metus eu rutrum. In in ante vel dui facilisis bibendum non non neque. Morbi dictum erat sed justo scelerisque malesuada<Link to={"/about"}>Read more</Link></p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </section>
    )
}

export default AboutUs;