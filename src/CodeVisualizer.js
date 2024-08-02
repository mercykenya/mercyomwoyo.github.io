import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css'; // Added for CSS support

const CodeVisualizer = () => {
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [theme, setTheme] = useState('prism-okaidia'); // Default theme

  // Code examples for different languages
  const examples = {
    javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`,
    python: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))`,
    java: `public class Main {
    public static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(10));
    }
}`
  };

  // Set code example and highlight it when the language changes
  useEffect(() => {
    setCode(examples[language]);
    Prism.highlightAll();
  }, [language, examples]); // Added examples to the dependency array

  // Highlight code when the code content changes
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  // Function to run the code using an external API
  const runCode = async () => {
    setIsLoading(true);
    setOutput('Running code...');

    try {
      const response = await fetch('https://api.jdoodle.com/v1/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: 'YOUR_CLIENT_ID', // Replace with your JDoodle client ID
          clientSecret: 'YOUR_CLIENT_SECRET', // Replace with your JDoodle client secret
          script: code,
          language: language,
          versionIndex: '0'
        })
      });

      const data = await response.json();
      setOutput(data.output || 'No output');
      setHistory([...history, { language, code, output: data.output }]); // Save to history
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="code-visualizer">
      <h2>Interactive Code Playground</h2>
      <p>Experiment with different programming languages and see the results in real-time!</p>

      <div className="language-selector">
        {['javascript', 'python', 'java'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`btn ${language === lang ? 'active' : ''}`}
          >
            {lang.charAt(0).toUpperCase() + lang.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setTheme(theme === 'prism-okaidia' ? 'prism-twilight' : 'prism-okaidia')}
          className={`btn ${theme === 'prism-twilight' ? 'active' : ''}`}
        >
          Toggle Theme
        </button>
      </div>

      <div className="code-editor">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          rows={15}
        />
      </div>

      <pre>
        <code className={`language-${language} ${theme}`}>
          {code}
        </code>
      </pre>

      <button
        onClick={runCode}
        className="btn run-btn"
        disabled={isLoading}
      >
        {isLoading ? 'Running...' : 'Run Code'}
      </button>

      <div className="output">
        <h3>Output:</h3>
        <pre>{output}</pre>
      </div>

      <div className="history">
        <h3>Execution History:</h3>
        {history.length === 0 ? (
          <p>No previous executions.</p>
        ) : (
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                <strong>{entry.language.toUpperCase()}</strong>: <pre>{entry.output}</pre>
                <button onClick={() => setCode(entry.code)}>Edit</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="fun-fact">
        <h3>Did you know?</h3>
        <p>
          The Fibonacci sequence has applications in various fields, including computer algorithms, financial market analysis, and even in nature (like the arrangement of leaves on some plants)!
        </p>
      </div>
    </div>
  );
};

export default CodeVisualizer;
