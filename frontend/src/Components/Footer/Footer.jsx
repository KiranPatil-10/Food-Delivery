import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique ducimus facere praesentium repellendus nam natus debitis corporis odit eum accusantium harum, quaerat vel enim, quos, reiciendis voluptas! Natus, beatae pariatur.</p>
                <div className="footer-social-icons">
                    <img src={assets.whatsapp_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                </div>
           </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 779-860-9833</li>
                    <li>contact@gofood.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2024 GOFOOD.com -All Right Reserved.  
        </p>
    </div>
  )
}

export default Footer