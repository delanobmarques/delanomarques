import React from 'react'
import {SiLinkedin} from 'react-icons/si';
import {SiGithub} from 'react-icons/si';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/delano-marques-339ab146/" target="_blank"><SiLinkedin/></a>
        <a href="https://github.com/delanobmarques" target="_blank"><SiGithub/></a>
    </div>
  )
}

export default HeaderSocials