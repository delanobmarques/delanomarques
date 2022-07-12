import React from 'react';
import './header.styles.scss';
import CtaButtons from './cta-buttons-component';
import delano_picture_01 from '../../assets/delano-marques.png';
import HeaderSocials from './header-socials.component';

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Delano Marques</h1>
        <h5 className="text-light">Web Developer</h5>
        
        <CtaButtons/>
        <HeaderSocials/>

        <div className="me">
          <img src={delano_picture_01} alt="Delano" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>


      </div>
    </header>
  )
}

export default Header;