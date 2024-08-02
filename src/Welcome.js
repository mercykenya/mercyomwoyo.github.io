// src/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Optional: Add styles if needed

function Welcome() {
  return (
    <div className="Welcome">
      <h2>Welcome to Mercy Omwoyo's CS Playground!</h2>
      <p>
        As an EdTech enthusiast, I'm thrilled to share this interactive space designed to ignite your passion for computer science. 
        Explore our tools and resources to enhance your learning journey:
      </p>
      <ul>
        <li><strong>Experiment with Code:</strong> Use our <Link to="/code-playground">Code Playground</Link> to write, run, and visualize code.</li>
        <li><strong>Explore Computer Science Concepts:</strong> Visit the <Link to="/cs-exploration">CS Exploration Hub</Link> for educational games and interactive content.</li>
        <li><strong>Test Your Knowledge:</strong> Try out our <Link to="/quiz">Quiz</Link> to challenge yourself and learn new facts about computer science.</li>
      </ul>
      <p>Whether you're a beginner or a seasoned coder, there's something here for everyone. Dive in and enjoy!</p>
    </div>
  );
}

export default Welcome;
