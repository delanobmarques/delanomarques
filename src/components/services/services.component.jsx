import React from 'react';
import './services.styles.scss';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          
          <div className="service__head">
            <h3>Web Development</h3>            
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
          </ul>

        </article>

        <article className="service">
          
          <div className="service__head">
            <h3>Educational Technologies</h3>            
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
          </ul>

        </article>

        <article className="service">
          
          <div className="service__head">
            <h3>Distant Learning</h3>            
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, at?</p>
            </li>
          </ul>

        </article>

      </div>
    </section>
  )
}

export default Services;