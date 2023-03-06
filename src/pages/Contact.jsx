import React from 'react';
import { AiOutlineHome,AiOutlineMail } from "react-icons/ai";
import {MdOutlinePhoneAndroid} from 'react-icons/md';

const Contact = () => {
  return (
    <div>
      <section className='container '>
        <div className='contact_hero'>
          <h1 className='text-white'>Contact</h1>
        </div>
      </section>


      <section className='container my-5 py-5'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.67477221333!2d49.714873375819245!3d40.39476947097444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1677817833690!5m2!1str!2saz"
          height={480} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>


      <section className='contact_form container my-5 py-5'>
        <h5>Get in Touch</h5>
        <div className='row'>
          <div className='col-12 col-lg-8 mb-5'>
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea className="form-control rounded-0 my-3" rows={8} defaultValue={""} placeholder="Enter Message" />
              <div className='row '>
                <div className='col-12 col-md-6'>
                  <input type="text" className='form-control rounded-0 mt-4' placeholder='Enter your name' />
                </div>
                <div className='col-12 col-md-6'>
                  <input type="email" className='form-control rounded-0 mt-4 ' placeholder='Email' />
                </div>
              </div>
              <input type="text" className="form-control rounded-0 mt-4" placeholder='Enter Subject' />

              <button className='btn border-0 rounded-0 mt-5'>Send</button>
            </form>
          </div>
          <div className='col-12 col-lg-3 offset-lg-1'>
            <div id='contact_info'>
              <div className='d-flex align-items-center my-3'>
                <div>
                  <AiOutlineHome className='media_icon' />
                </div>
                <div className='d-felx flex-column align-items-center justify_content-center ms-3'>
                  <h6>Buttonwood, California.</h6>
                  <p className='m-0'>Rosemead, CA 91770</p>
                </div>
              </div>

              <div className='d-flex align-items-center my-5'>
                <div>
                  <MdOutlinePhoneAndroid className='media_icon' />
                </div>
                <div className='d-felx flex-column align-items-center justify_content-center ms-3'>
                  <h6>+1 253 565 2365</h6>
                  <p className='m-0'>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className='d-flex align-items-center mt-3'>
                <div>
                  <AiOutlineMail className='media_icon' />
                </div>
                <div className='d-felx flex-column align-items-center justify_content-center ms-3'>
                  <h6>support@colorlib.com</h6>
                  <p className='m-0'>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  )
}

export default Contact