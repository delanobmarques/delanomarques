import React from 'react';
import './skills.styles.scss';
import {BsPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='skills'>
      <h5>These are my skills</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        {/************ FRONTEND skills *********/}
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
          </div>
        </div>
        {/************ END OF FRONTEND skills *********/}
        
        {/************ BACKEND skills *********/}
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>Firebase</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
            <article className="skills__details">
              <BsPatchCheckFill className="skills__details-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">skillsd</small>
              </div>
            </article>
          </div>
        </div>
        {/************ END OF BACKEND skills *********/}
      </div>
    </section>
  )
}

export default Skills;