import React from 'react';
import './portfolio.styles.scss';
import punkApiImg from '../../assets/punkapi.jpg';
import learningObjImg from '../../assets/lobjects.jpg';
import flighMapImg from '../../assets/flightmap.jpg';
import braziliansImg from '../../assets/brazilians.jpg';
import swExplorerImg from '../../assets/sw-explorer.JPG';
import newsImg from '../../assets/newsImg.JPG';
import quizImg from '../../assets/quizImg.JPG';
import weatherImg from '../../assets/portfolio-default.png';

const data = [
  {
    id: 1,
    image: punkApiImg,
    title: "Brewdog's Brewery PunkApi",
    description:'Client-side Programming Project. Web application that interfaces with a REST service for displaying data (Punk API).',
    github: "https://github.com/delanobmarques",
    liveDemo: "https://punkapi-dmarques.netlify.app/"
  },
  {
    id: 2,
    image: learningObjImg,
    title: "Learning Objects",
    description:'Full stack web app built using MERN stack.',
    github: "https://github.com/delanobmarques/learning-objects",
    liveDemo: "https://w0436244-fullstack.herokuapp.com/"
  },
  {
    id: 3,
    image: swExplorerImg,
    title: "Star Wars Explorer",
    description:"This is a simple web app, built with React, that displays data from the Star Wars API. The Star Wars API (https://swapi.dev/). Features and technniques used in this project: Redux style state management; Lazy Loading when changing routes; Presentational and Smart Components; JSX and Typescript; React Material-UI (https://mui.com/).",
    github: "https://github.com/delanobmarques/star-wars-explorer",
    liveDemo: "https://star-wars-explorer.netlify.app/"
  },
  {
    id: 4,
    image: flighMapImg,
    title: "Flight Map",
    description:'Full stack web app built using MERN stack.?????? ????????? ::::::::',
    github: "https://github.com/delanobmarques/",
    liveDemo: "https://delanomarques.netlify.app/assets/projects/flightmap/index.html"
  },
  {
    id: 5,
    image: quizImg,
    title: "Quiz App",
    description:"Quiz web app using Open Trivia API built with React.js. Features and technniques used in this project: Axios, Redux style state management; React Material-UI.",
    github: "https://github.com/delanobmarques/",
    liveDemo: "https://delanomarques.netlify.app"
  },
  {
    id: 6,
    image: newsImg,
    title: "News App",
    description:"News web app using News API built with React.js. Features and technniques used in this project include Axios and Context API.",
    github: "https://github.com/delanobmarques/news-webapp",
    liveDemo: "https://delanomarques.netlify.app"
  },
  {
    id: 7,
    image: weatherImg,
    title: "Weather App",
    description:"Weather web app using OpenWeatherMap API built with React.js and axios.",
    github: "https://github.com/delanobmarques/weather-app-react",
    liveDemo: "https://delanomarques.netlify.app"
  },
  {
    id: 8,
    image: braziliansImg,
    title: "Brazilians Sweet Flavours",
    description:"Web Design Fundamentals Project. Build a style guide and develop a website having as a client a Gourmet Desserts Business.",
    github: "https://github.com/delanobmarques/learning-objects",
    liveDemo: "https://brazilians.netlify.app/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Here's some of my work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
      
      {
        data.map(({id, image, title, github, liveDemo}) => {
          return (
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target='__blank'>Github</a>
              <a href={liveDemo} className="btn btn-primary" target='__blank'>Live Demo</a>
            </div>
          </article>           
          )
        })
      }
      </div>
    </section>
  )
}

export default Portfolio;
