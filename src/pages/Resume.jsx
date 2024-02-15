import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h2>My resume</h2>
      
      <p><a href="https://docs.google.com/document/d/1UpCBFjlfkT2oh-Rn5rhSY_vbifXLt2G7/edit?usp=sharing&ouid=102178852790049331224&rtpof=true&sd=true">View my resume here</a></p>
      
      <h2>My technical proficiencies</h2>
      <ul className="resume-list">
        <li>MERN</li>
        <li>Sequelize</li>
        <li>GraphQL</li>
        <li>3rd Party API integrations</li>
        <li>mySQL</li>
        <li>Visual Studio Code</li>
        <li>Heroku</li>
        <li>Render</li>
        <li>Netlify</li>
        <li>JQuery</li>
        <li>Bootstrap</li>
        <li>Stripe</li>
        <li>Vite</li>
      </ul>

      
      <p className="resume-italic">I am excited to take this journey into the technical world and learn more languages and tools!</p>
    </div>
  );
}

export default Resume;
