import React from 'react'
import {FaPinterestP,FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';
import '../styles/Footer.css';

function Footer() {
  return (
    <div>
      <div className="footer__top__container">
        <hr />
        <img src="../assets/footerlogo.png" />
        <hr />
      </div>
      <div className="footer__second__container">
        <div>
          <h2>About swadeshi.com</h2>
          <h2>Privacy Policy</h2>
          <h2>Terms & Conditions</h2>
        </div>
        <div className="footer__icons">
          <AiOutlineTwitter className="footer__icons" />
          <AiOutlineInstagram className="footer__icons" />
          <FaFacebookF className="footer__icons" />
          <GrLinkedinOption className="footer__icons" />
          <FaPinterestP className="footer__icons" />
        </div>
        <div>
          <h2>Shipping info</h2>
          <h2>Return/Exchange</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="footer__bottom__container">
        <div className="footer__vertical"></div>
        <h4>Subscribe for our news and offers</h4>
        <div className="input__container__footer">
          <input placeholder="Please enter your email address" />
          <p>Subscribe</p>
        </div>
        <h4>Copy Rights 2020 @swadesi.com</h4>
      </div>
    </div>
  );
}

export default Footer