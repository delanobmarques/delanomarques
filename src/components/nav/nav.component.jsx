import React, { useState } from 'react';
import './nav.styles.scss';
import { FcHome, FcBusinessman, FcServices, FcMultipleDevices, FcContacts } from 'react-icons/fc';
import Tooltip from '@mui/material/Tooltip';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Tooltip title="Home" placement="top" arrow>
        <a href="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome/></a>
      </Tooltip>
      <Tooltip title="About" placement="top" arrow>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcBusinessman/></a>
      </Tooltip>
      <Tooltip title="Skills" placement="top" arrow>
        <a href="#skills" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FcServices/></a>      
      </Tooltip>
      <Tooltip title="Portfolio" placement="top" arrow>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><FcMultipleDevices/></a>      
      </Tooltip>
      <Tooltip title="Contact" placement="top" arrow>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts/></a>
      </Tooltip>
    </nav>
  )
}

export default Nav;