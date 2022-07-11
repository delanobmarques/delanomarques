import React from 'react';
import './portfolio.styles.scss';
import punkApiImg from '../../assets/punkapi.jpg';
import learningObjImg from '../../assets/lobjects.jpg';
import flighMapImg from '../../assets/flightmap.jpg';
import braziliansImg from '../../assets/brazilians.jpg';
import swExplorerImg from '../../assets/sw-explorer.JPG';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Here's some of my work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={punkApiImg} alt="PunkApi Project" />
          </div>
          <h3>Brewdog's Brewery PunkApi</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques" className="btn" target='__blank'>Github</a>
            <a href="https://punkapi-dmarques.netlify.app/" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={learningObjImg} alt="Learning Objects  Project" />
          </div>
          <h3>Learning Objects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques/learning-objects" className="btn" target='__blank'>Github</a>
            <a href="https://w0436244-fullstack.herokuapp.com/" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={braziliansImg} alt="Brazilians Sweet Flavours" />
          </div>
          <h3>Brazilians'</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques" className="btn" target='__blank'>Github</a>
            <a href="https://brazilians.netlify.app/" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={punkApiImg} alt="PunkApi MERN Project" />
          </div>
          <h3>Portfolio project item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques" className="btn" target='__blank'>Github</a>
            <a href="https://punkapi-dmarques.netlify.app/" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>
          <a href="https://github.com/delanobmarques" className="btn" target='__blank'>Github</a>
          <a href="https://punkapi-dmarques.netlify.app/" className="btn btn-primary" target='__blank'>Live Demo</a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={flighMapImg} alt="Flight map" />
          </div>
          <h3>Flight Map</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques" className="btn" target='__blank'>Github</a>
            <a href="https://delanomarques.netlify.app/assets/projects/flightmap/index.html" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>          
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={swExplorerImg} alt="Star Wars Explorer" />
          </div>
          <h3>Star War Explorer</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/delanobmarques/star-wars-explorer" className="btn" target='__blank'>Github</a>
            <a href="https://star-wars-explorer.netlify.app/" className="btn btn-primary" target='__blank'>Live Demo</a>
          </div>          
        </article>

      </div>
    </section>
  )
}

export default Portfolio;