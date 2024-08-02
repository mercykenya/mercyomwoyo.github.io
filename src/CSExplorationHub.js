import React, { useState } from 'react';
import './CSExplorationHub.css'; // Import the CSS for styling
import CodeMirror from '@uiw/react-codemirror';
import { python, javascript } from '@codemirror/lang-javascript';
import { python as pythonLang } from '@codemirror/lang-python';
import { oneDarkTheme } from '@codemirror/theme-one-dark'; // Updated import
// Importing images
import ercImage from './erc.png';
import humanImage from './human.jpg';
import mouseImage from './mouse.jpg';

const CSExplorationHub = () => {
  const [selectedSection, setSelectedSection] = useState('funFacts');
  const [challengeCode, setChallengeCode] = useState('');

  const funFacts = [
    {
      fact: 'The first computer virus was created in 1983 and was called the "Elk Cloner".',
      detail: 'It was a boot sector virus that infected Apple II computers. It was written by a 15-year-old high school student named Rich Skrenta.',
      image: ercImage, // Updated image path
    },
    {
      fact: 'The first computer mouse was made of wood.',
      detail: 'Douglas Engelbart invented the first computer mouse in 1964. It was a simple wooden device with a single button.',
      image: mouseImage, // Updated image path
    },
    {
      fact: 'The concept of "computer" was originally a job title.',
      detail: 'In the early days of computing, a "computer" was a person who performed complex calculations manually.',
      image: humanImage, // Updated image path
    }
  ];

  const codingChallenges = [
    {
      id: 1,
      title: 'Reverse a String (JavaScript)',
      description: 'Write a function that reverses a string in JavaScript.',
      hint: 'Use the built-in split, reverse, and join methods.',
      initialCode: `function reverseString(str) {
  return str.split('').reverse().join('');
}`,
      language: 'javascript'
    },
    {
      id: 2,
      title: 'Factorial of a Number (Python)',
      description: 'Create a Python function that returns the factorial of a number.',
      hint: 'Use recursion or a loop.',
      initialCode: `def factorial(n):
  if n == 0:
    return 1
  else:
    return n * factorial(n-1)`,
      language: 'python'
    }
  ];

  return (
    <div className="cs-exploration-hub">
      <div className="intro-section">
        <h2>Welcome to the CS Exploration Hub!</h2>
        <p>
          Get into the world of computer science with interactive tools and resources designed to make learning both engaging and educational. 
          Here, you'll find:
        </p>
        <ul>
          <li><strong>Fun Facts:</strong> Discover intriguing facts about the history and development of computing.</li>
          <li><strong>Coding Challenges:</strong> Enhance your coding skills by solving a variety of programming problems in different languages.</li>
        </ul>
      </div>
      <div className="navigation">
        <button onClick={() => setSelectedSection('funFacts')} className={`btn nav-btn ${selectedSection === 'funFacts' ? 'active' : ''}`}>
          Fun Facts
        </button>
        <button onClick={() => setSelectedSection('challenges')} className={`btn nav-btn ${selectedSection === 'challenges' ? 'active' : ''}`}>
          Coding Challenges
        </button>
      </div>

      {selectedSection === 'funFacts' && (
        <div className="section">
          <h3>Fun Facts</h3>
          <div className="fact-list">
            {funFacts.map((fact, index) => (
              <div key={index} className="fact-item">
                <h4>{fact.fact}</h4>
                <p>{fact.detail}</p>
                <img src={fact.image} alt="Fun Fact" className="fact-image" />
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedSection === 'challenges' && (
        <div className="section">
          <h3>Coding Challenges</h3>
          <div className="challenge-list">
            {codingChallenges.map((challenge) => (
              <div key={challenge.id} className="challenge-item">
                <h4>{challenge.title}</h4>
                <p><strong>Description:</strong> {challenge.description}</p>
                <p><strong>Hint:</strong> {challenge.hint}</p>
                <div className="editor-container">
                  <CodeMirror
                    value={challenge.initialCode}
                    extensions={[challenge.language === 'javascript' ? javascript() : pythonLang()]}
                    theme={oneDarkTheme} // Use oneDarkTheme here
                    height="200px"
                    onChange={(value) => setChallengeCode(value)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CSExplorationHub;
