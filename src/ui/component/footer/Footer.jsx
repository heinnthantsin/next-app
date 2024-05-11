"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faInstagram,faTwitter,faYoutube} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {

  return(
  <footer className="relative pt-8 pb-6 bg-slate-600" >
    <div className="container mx-auto  py-[10rem] ">
    <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
        <div className="flex flex-col md:p-0 py-4 gap-8">
            <img src="logo.jpg" alt="" />  
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-instagram" />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
            <FontAwesomeIcon icon="fa-brands fa-youtube" />
        </div>
    </div>

{/* //part1 end  */}

    <div className="footer-second-part">
      <div>
        <input type="email" placeholder="Enter your email"/>
        <button  className='footer-subscribe-btn'>Subscribe</button>
        
      </div>

    </div>

{/* // part 2 end */}

    <div className="footer-menus">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Artists</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>

    </div>
  </footer>  
  );
}
