import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import Welcome from './Welcome';
import CodeVisualizer from './CodeVisualizer';
import CSExplorationHub from './CSExplorationHub';
import ComputerScienceQuiz from './ComputerScienceQuiz';


function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Automatically navigate to CSExplorationHub after 10 seconds
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mercy Omwoyo's CS Playground</h1>
          <nav>
            <ul>
              <li><Link to="/code-playground">Code Playground</Link></li>
              <li><Link to="/cs-exploration">CS Exploration Hub</Link></li>
              <li><Link to="/quiz">Quiz</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/code-playground" element={<CodeVisualizer />} />
            <Route path="/cs-exploration" element={<CSExplorationHub />} />
            <Route path="/quiz" element={<ComputerScienceQuiz />} />
            <Route path="/" element={showWelcome ? <Welcome /> : <Navigate to="/cs-exploration" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;