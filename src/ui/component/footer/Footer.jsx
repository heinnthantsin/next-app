"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  return(
  <div className="main-footer">

    <div className="footer-first-part">
      <div className="footer-logo"><img src="Logo.jpg" alt="" /></div>
      <div className="footer-short-desp">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur velit perspiciatis maiores dolore facilis
           iste eos quibusdam numquam blanditiis libero, nulla, eligendi harum ea quasi, animi molestiae ratione porro?</p>
      </div>
      <div className="footer-social-icons">
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-youtube" />
      </div>
    </div>

    <div className="footer-second-part">
      <div>
        <input type="email" placeholder="Enter your email"/>
        <button  className='footer-subscribe-btn'>Subscribe</button>
      </div>
    </div>

    <div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Artists</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  </div>  
  );
}
