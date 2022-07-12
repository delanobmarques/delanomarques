import React from 'react';
import './footer.styles.scss';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Delano Marques</a>

      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/delanobmarques/"><FiInstagram/></a>
        <a href="https://www.facebook.com/delano.brandesmarques/"><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Delano Marques 2022</small>
      </div>
    </footer>
  )
}

export default Footer;