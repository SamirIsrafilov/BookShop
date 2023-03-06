import React from 'react';
import Logo from '../img/logo.png.webp';
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn,FaYoutube,FaHeart} from 'react-icons/fa';

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container py-5" >
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <img src={Logo} alt="" />
                        <p className='mt-4'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                        <ul className='list-unstyled d-flex mt-4' id='footer_social'>
                            <li><a href="#"><BsFacebook className='social_icon' /></a></li>
                            <li><a href="#"><BsInstagram className='social_icon' /></a></li>
                            <li><a href="#"><FaLinkedinIn className='social_icon' /></a></li>
                            <li><a href="#"><FaYoutube className='social_icon' /></a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <ul className='list-unstyled'>
                        <li className='fw-bold mb-4'>Book Category</li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Horror - Thriller</a></li>
                        <li><a href="#">Love Stories</a></li>
                        <li><a href="#">Science Fiction</a></li>
                        <li><a href="#">Business</a></li>

                      </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <ul className='list-unstyled'>
                        <li className='fw-bold mb-5'> </li>
                        <li><a href="#">Biography</a></li>
                        <li><a href="#">Astrology</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Software Development</a></li>
                        <li><a href="#">Ecommerce</a></li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                    <ul className='list-unstyled'>
                        <li className='fw-bold mb-4'>Site Map</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                </div>
            </div>

            <div className='mt-5 pt-3'>
                <p className='m-0 text-center'>Copyright ©2023 All rights reserved | This template is made with <FaHeart/> by Colorlib</p>
            </div>
        </div>
    )
}

export default Footer