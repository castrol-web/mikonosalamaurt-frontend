import React, { useState } from 'react'
import "./contact.css";
import Header from "../../components/Header"
import contact from "../../images/contact.jpg";
import { AiOutlineMail } from "react-icons/ai"
import { BsMessenger } from "react-icons/bs"
import { FaWhatsapp } from "react-icons/fa"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { URL } from '../../App';


const Contact = () => {
  const [userName, setName] = useState('');
  const [feedbackEmail, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleMessage(event) {
    setMessage(event.target.value);
  }

  //Email validation
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    //checking for validation errors
 

if(!validateEmail(feedbackEmail)) {
      return toast.error("Enter correct Email format")
    }



    //appending the  data entered here
    const data = {
      userName,
      feedbackEmail,
      message,
    }

    try {
      await axios.post(`${URL}/api/contact`, data)
      toast.success("Feedback received successfully,We will respond to you soon", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    }
    catch (error) {
      console.log(error + "Error occurred");
      toast.error("Error occurred please try again");
    }

  };


  return (
    <>
      {/* having the header component */}
      <Header title="Get in touch" image={contact}>
        Odio tempor orci dapibus ultrices in. Neque aliquam vestibulum
        morbi blandit cursus risus. Gravida in fermentum et sollicitudin
        ac orci phasellus. Nisi porta lorem mollis aliquam ut. Scelerisque eu
        ultrices vitae auctor eu. Elit eget gravida cum sociis natoque
      </Header>
      <div>
        <div className='contact_title'>
          <h2>Contact Us/FeedBack</h2>
        </div>

        <form onSubmit={handleSubmit} action={`${URL}/api/contact`} method='post' encType='multipart/form-data'>
          <div className='row g-2 mb-3'>
            <div className="col-md">
              <div className="form-floating">
                <input type="text" className="form-control" id="name" placeholder="Name" value={userName} required onChange={handleName}></input>
                <label htmlFor="name">Name</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating">
                <input type="email" className="form-control" id="email" placeholder="lastName" name="feedbackEmail" value={feedbackEmail} onChange={handleEmail} required></input>
                <label htmlFor="email">Email</label>
              </div>
            </div>
          </div>

          <div className='form-outline w-75 mb-4'>
            <textarea
              id="message"
              value={message}
              onChange={handleMessage}
              type="text"
              className='form-control'
              required
            ></textarea>
            <label htmlFor="message">Message:</label>
          </div>
          <button type="submit" className='btn btn-primary'>Submit</button>
          
        </form>
      </div>
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="mailto:castrolmkude@gmail.com" target="_blank" rel='noreferrer onopener'><AiOutlineMail /></a>
          <a href="http://m.me/Mikono_Salama_For_Your_Treasure_Day_Care" target="_blank" rel='noreferrer onopener'><BsMessenger /></a>
          <a href="https://wa.me/+255657849224" target="_blank" rel='noreferrer onopener'><FaWhatsapp /></a>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default Contact