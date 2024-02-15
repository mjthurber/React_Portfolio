import React from 'react';
import './Portfolio.css'; 
import TahananCandleCo from '../assets/TahananCandleCo.png';
import RottenTrails from '../assets/RottenTrails3.png';
import Healthy_Panda from '../assets/Healthy_Panda.png';
import NoteTaker from '../assets/NoteTaker.png';
import WeatherApp from '../assets/WeatherApp.png';
import RegexTutorial from '../assets/RegexSnip.png';



function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Tahanan Candle Co.',
      description: 'Worked with a real client to start building her own online candle shop.',
      imageUrl: TahananCandleCo,
      projectUrl: 'https://github.com/mjthurber/Tahanan_Candle',
      deployedSiteUrl: 'https://tahanancandleco.onrender.com/',
    },
    {
      id: 2,
      title: 'Rotten Trails',
      description: 'Used MVC framework to upload and review trails.',
      imageUrl: RottenTrails,
      projectUrl: 'https://github.com/loganlosee/Rotten-Trails', 
      deployedSiteUrl: 'https://rotten-trails-96144daadebc.herokuapp.com/',
    },
    {
      id: 3,
      title: 'Healthy Panda',
      description: 'Shows recipes and exercises to get in shape.',
      imageUrl: Healthy_Panda,
      projectUrl: 'https://github.com/JJTheDev/Fitness-App', 
      deployedSiteUrl: 'https://jjthedev.github.io/Fitness-App/',
    },
    {
      id: 4,
      title: 'Note Taker',
      description: 'Write, save, and update notes.',
      imageUrl: NoteTaker,
      projectUrl: 'https://github.com/mjthurber/Note_taker', 
      deployedSiteUrl: 'https://mjthurber.github.io/Note_taker/',
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Check to see the five day weather forecast for any city.',
      imageUrl: WeatherApp,
      projectUrl: 'https://github.com/mjthurber/Weather_App', 
      deployedSiteUrl: 'https://mjthurber.github.io/Weather_App/',
    },
    {
      id: 6,
      title: 'Regex Tutorial',
      description: 'A gist I wrote about Regex.',
      imageUrl: RegexTutorial,
      projectUrl: 'https://github.com/JJTheDev/Fitness-App', 
      deployedSiteUrl: 'https://jjthedev.github.io/Fitness-App/',
    },
  ];

  return (
    <div className="portfolio-container">
      <section className="portfolio-content">
        <h2>Portfolio</h2>
        <div className="project-cards">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
              </a>
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  Deployed Site:{' '}
                  <a href={project.deployedSiteUrl} target="_blank" rel="noopener noreferrer">
                    {project.deployedSiteUrl}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
