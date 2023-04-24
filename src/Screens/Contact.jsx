// eslint-disable-next-line
import React, { useState ,Component } from "react";
import Footer from "../Components/Footer"
import "react-toastify/dist/ReactToastify.css";
import Contactimg from "../Assets/contact.svg"

 import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Contact = () => {
    useEffect(()=>{
        Aos.init({duration: 1800});
    },[]);
  return (
    <>
    <div data-aos="fade-up">
 <form>  
     <section>
      <div
        class="d-flex flex-column min-vh-100 justify-content-center"
      >
        <div class="container">
          <div class="row" >
<div class="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div class="row">
                <div class="col-md-6">
                  <div class="m-5 text-center"><h1>Welcome!</h1></div>
                  <form class="m-5"
  action="https://formspree.io/f/mbjeqanp"
  method="POST"
>  
                    <div class="mb-3">
                    <label class="form-label" for="name">Name:</label>
                    <input  class="form-control" type="text" id="name" name="name" placeholder="Enter your name" required/>
                      {/* <label  name="message" class="form-label" for="username" >Username :</label>
                      <input   class="form-control" type="text"  placeholder="Enter your name" required
                     /> */}
                    </div>
                    
                    <div class="mb-3">
                    <label for="Email">Email:</label>
                    <input  placeholder="Enter your Email" required
                        class="form-control" type="email" id="email" name="email" />
                      {/* <label  name="Email" class="form-label" for="email" >E-mail :</label>
                      <input
                      placeholder="Enter your email" required
                        class="form-control"
                        type="email"
                
                       /> */}
                    </div>
                    <div class="mb-3">
                    <label for="phone">Phone number:</label>
                    <input  placeholder="Enter your Phone number" required
                        class="form-control" type="tel" id="phonenumber" name="phone number" />
                      {/* <label  name="Email" class="form-label" for="email" >E-mail :</label>
                      <input
                      placeholder="Enter your email" required
                        class="form-control"
                        type="email"
                
                       /> */}
                    </div>
                    {/* <div class="mb-3">
                      <label name="phone" class="form-label" for="phone">Phone number :</label>
                      <input
                      placeholder="Enter your phone number" required
                        class="form-control"
                        type="tel"
                      
                      />
                    </div> */}
                    <div class="">
                      <input
                      id="btn-form"
                        type="Submit"
                        class="form-control btn btn-primary mt-3"
                      />
                    </div>
                  </form>
                </div>
                <div class="col-md-6">
                  <div id="contact-img">
                    <img
                      src={Contactimg}
                      alt=""
                      class="img-fluid p-5 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </form>
    </div>
      <Footer />
    </>
  );
};

export default Contact;
