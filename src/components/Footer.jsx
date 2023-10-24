import React from 'react'
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaYoutube} from "react-icons/fa"
import {FaHome} from "react-icons/fa"
import {AiOutlineMail} from "react-icons/ai"
import {FaPhoneAlt} from "react-icons/fa"
import {AiFillPrinter} from "react-icons/ai"
import {Link} from "react-router-dom";


const Footer = () => {

    const date = new Date().getFullYear();

  return (
    <div>
    {/* <!-- Footer --> */}
    <footer className="text-center text-lg-start bg-dark text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* <!-- Left --> */}
            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            {/* <!-- Left --> */}

            {/* <!-- Right --> */}
            <div>
                <Link to="http://m.me/Mikono_Salama_For_Your_Treasure_Day_Care" target="_blank" rel='noreferrer onopener' className="me-4 text-reset">
                    <FaFacebookF />
                </Link>

                <Link to="https://www.instagram.com/stories/smile/31142536430815692/" className="me-4 text-reset" target="_blank" rel='noreferrer onopener'>
                    <FaInstagram />
                </Link>
                <Link to="https:twitter.com/intent/tweet?screen_name=c_eliasson" className="me-4 text-reset" target="_blank" rel='noreferrer onopener'>
                    <FaTwitter />
                </Link>
                <Link to="https://www.youtube.com/watch?v=r3aqoD_TvSo" className="me-4 text-reset" target="_blank" rel='noreferrer onopener'>
                    <FaYoutube />
                </Link>
            </div>
            {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
            <div className="container text-center text-md-start mt-5">
                {/* <!-- Grid row --> */}
                <div className="row mt-3">
                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        {/* <!-- Content --> */}
                        <h6 className="text-uppercase fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>Mikono Salama
                        </h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        </p>
                    </div>
                    {/* <!-- Grid column --> */}


                    {/* <!-- Grid column --> */}
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <a href="/" className="text-reset">Home</a>
                        </p>
                        <p>
                            <a href="/about" className="text-reset">About</a>
                        </p>
                        <p>
                            <Link to="gallery" className="text-reset">Gallery</Link>
                        </p>
                        <p>
                            <Link to="blogs" className="text-reset">Blogs</Link>
                        </p>
                        <p>
                            <Link to="contact" className="text-reset">Contact</Link>
                        </p>
                    </div>
                    {/* Grid column  */}

                    {/* <!-- Grid column --> */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        {/* <!-- Links --> */}
                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p> <FaHome /> Moshi, Kilimanjaro 10012, TZ</p>
                        <p>
                        <AiOutlineMail />
                            margaretumburi@gmail.com
                        </p>
                        <p> <FaPhoneAlt /> +255 762 360 062</p>
                        <p> <AiFillPrinter /> +255 658 192 901</p>
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
        </section>
        {/* Section: Links  */}

        {/* Copyright */}
        <div className="text-center p-1" id="copyright">
        © Copyright 2018 - {date}
        </div>
        <div className="text-center" id="copyright">
            Made with ❤️ by: Castrol Banda
        </div>
        {/* Copyright */}
    </footer>
    {/* Footer*/}

</div>
  )
}

export default Footer