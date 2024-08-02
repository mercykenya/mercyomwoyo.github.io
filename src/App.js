import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import CodeVisualizer from './CodeVisualizer';
import CSExplorationHub from './CSExplorationHub';
import ComputerScienceQuiz from './ComputerScienceQuiz'; // Import the ComputerScienceQuiz component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mercy Omwoyo's CS Playground</h1>
          <nav>
            <ul>
              <li><Link to="/code-playground">Code Playground</Link></li>
              <li><Link to="/cs-exploration">CS Exploration Hub</Link></li>
              <li><Link to="/quiz">Quiz</Link></li> {/* Link to ComputerScienceQuiz */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/code-playground" element={<CodeVisualizer />} />
            <Route path="/cs-exploration" element={<CSExplorationHub />} />
            <Route path="/quiz" element={<ComputerScienceQuiz />} /> {/* Route for ComputerScienceQuiz */}
            <Route path="/" element={
              <div className="intro">
                <h2>Welcome to Mercy Omwoyo's CS Playground!</h2>
                <p>
                  Get into the exciting world of computer science with our interactive tools designed to make learning and exploration fun. 
                  Here, you can:
                </p>
                <ul>
                  <li><strong>Experiment with Code:</strong> Use our <Link to="/code-playground">Code Playground</Link> to write, run, and visualize code in various programming languages. See your code in action and learn through interactive experimentation.</li>
                  <li><strong>Explore Computer Science Concepts:</strong> Visit our <Link to="/cs-exploration">CS Exploration Hub</Link> to engage with interactive quizzes, educational games, and other fun activities that help you understand and appreciate computer science.</li>
                  <li><strong>Test Your Knowledge:</strong> Try out our <Link to="/quiz">Quiz</Link> to see how much you know and learn new facts about computer science.</li>
                </ul>
                <p>Whether you are a beginner or a seasoned coder, there’s something here for everyone. Enjoy exploring and learning!</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
