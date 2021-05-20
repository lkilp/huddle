import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import logo from '../assets/images/logo.svg';
import locationIcon from '../assets/images/icon-location.svg';
import phoneIcon from '../assets/images/icon-phone.svg';
import emailIcon from '../assets/images/icon-email.svg';


const Footer = () => {
    return(
        <div className="Footer">
            <img src={logo} alt="logo" className="white-huddle-logo" />
            <div className="flex-container">
                <div className="contacts">
                    <div className="contacts-grid">
                        <img src={locationIcon} alt="location icon" className="icon"/>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua</div>
                    </div>
                    <div className="contacts-grid">
                        <img src={phoneIcon} alt="phone icon" className="icon"/>
                        <div>+1-543-123-4567</div>
                    </div>
                    <div className="contacts-grid">
                        <img src={emailIcon} alt="email icon" className="icon"/>
                        <div>example@huddle.com</div>
                    </div>
                </div>
                <div className="grid-container">
                    <div>About Us</div>
                    <div>Career</div>
                    <div>What We Do</div>
                    <div>Blog</div>
                    <div>FAQ</div>
                    <div>Contact Us</div>
                </div>
                <div className="symbols">
                    <div className="circle"><FontAwesomeIcon icon={faFacebookF} /></div>
                    <div className="circle"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="circle"><FontAwesomeIcon icon={faInstagram} /></div>
                    </div>         
            </div>
            <div className="copyright">&copy; Copyright 2018 Huddle. All rights reserved.</div>
        </div>
    )
}
export default Footer;