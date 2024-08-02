// src/ComputerScienceQuiz.js
import React, { useState, useEffect } from 'react';
import './ComputerScienceQuiz.css'; // Import the CSS file for styling

const questions = [
    {
      question: 'Who is known as the father of computer science?',
      options: ['Alan Turing', 'Ada Lovelace', 'Charles Babbage', 'John von Neumann'],
      answer: 'Alan Turing',
      explanation: 'Alan Turing is considered the father of computer science for his foundational work in computing theory and artificial intelligence.',
      link: 'https://en.wikipedia.org/wiki/Alan_Turing',
    },
    {
      question: 'What does HTML stand for?',
      options: ['Hypertext Markup Language', 'Hyperlink and Text Markup Language', 'High-Level Text Markup Language', 'Hypertext Machine Language'],
      answer: 'Hypertext Markup Language',
      explanation: 'HTML stands for Hypertext Markup Language and is used to create and structure sections, paragraphs, and links on web pages.',
      link: 'https://en.wikipedia.org/wiki/HTML',
    },
    {
      question: 'Which algorithm is used for finding the shortest path in a graph?',
      options: ['Dijkstra\'s Algorithm', 'Bubble Sort', 'Merge Sort', 'Quick Sort'],
      answer: 'Dijkstra\'s Algorithm',
      explanation: 'Dijkstra\'s Algorithm is used to find the shortest path between nodes in a graph, which is widely used in routing and navigation systems.',
      link: 'https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm',
    },
    {
      question: 'What is the time complexity of binary search?',
      options: ['O(1)', 'O(log n)', 'O(n)', 'O(n^2)'],
      answer: 'O(log n)',
      explanation: 'Binary search has a time complexity of O(log n), as it repeatedly divides the search interval in half.',
      link: 'https://en.wikipedia.org/wiki/Binary_search_algorithm',
    },
    {
      question: 'Which of the following is a NoSQL database?',
      options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle'],
      answer: 'MongoDB',
      explanation: 'MongoDB is a NoSQL database known for its flexibility and scalability, unlike SQL databases which use structured schemas.',
      link: 'https://en.wikipedia.org/wiki/MongoDB',
    },
    {
      question: 'What is the primary purpose of a firewall?',
      options: ['To prevent unauthorized access to a network', 'To encrypt data', 'To backup data', 'To manage network traffic'],
      answer: 'To prevent unauthorized access to a network',
      explanation: 'A firewall is used to prevent unauthorized access to or from a private network by filtering incoming and outgoing traffic.',
      link: 'https://en.wikipedia.org/wiki/Firewall_(networking)',
    },
    {
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Simple Query Language', 'Sequential Query Language', 'Structured Quick Language'],
      answer: 'Structured Query Language',
      explanation: 'SQL stands for Structured Query Language, which is used for managing and querying relational databases.',
      link: 'https://en.wikipedia.org/wiki/SQL',
    },
    {
      question: 'Which protocol is used to securely transmit data over the internet?',
      options: ['HTTP', 'FTP', 'SMTP', 'HTTPS'],
      answer: 'HTTPS',
      explanation: 'HTTPS (Hypertext Transfer Protocol Secure) is used to securely transmit data over the internet by encrypting the data exchanged between the browser and server.',
      link: 'https://en.wikipedia.org/wiki/HTTPS',
    },
    {
      question: 'What is the function of an operating system?',
      options: ['To manage hardware resources', 'To encrypt data', 'To manage network traffic', 'To provide security patches'],
      answer: 'To manage hardware resources',
      explanation: 'An operating system manages hardware resources and provides services for computer programs.',
      link: 'https://en.wikipedia.org/wiki/Operating_system',
    },
    {
      question: 'Which data structure uses LIFO (Last In, First Out) principle?',
      options: ['Queue', 'Stack', 'Linked List', 'Tree'],
      answer: 'Stack',
      explanation: 'A stack uses the LIFO principle, where the last element added is the first to be removed.',
      link: 'https://en.wikipedia.org/wiki/Stack_(abstract_data_type)',
    },
    {
      question: 'What does API stand for?',
      options: ['Application Programming Interface', 'Application Protocol Interface', 'Advanced Programming Interface', 'Application Process Integration'],
      answer: 'Application Programming Interface',
      explanation: 'API stands for Application Programming Interface, which allows different software applications to communicate with each other.',
      link: 'https://en.wikipedia.org/wiki/API',
    },
    {
      question: 'Which of the following is a high-level programming language?',
      options: ['Assembly', 'C', 'Machine Code', 'Binary'],
      answer: 'C',
      explanation: 'C is a high-level programming language known for its performance and efficiency in system programming.',
      link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
      question: 'What is a data structure used to store key-value pairs?',
      options: ['Array', 'Hash Map', 'Queue', 'Stack'],
      answer: 'Hash Map',
      explanation: 'A Hash Map (or Hash Table) is a data structure used to store key-value pairs and provides efficient access to values based on keys.',
      link: 'https://en.wikipedia.org/wiki/Hash_table',
    },
    {
      question: 'What is the main purpose of an algorithm?',
      options: ['To sort data', 'To solve a problem', 'To store data', 'To display data'],
      answer: 'To solve a problem',
      explanation: 'An algorithm is a step-by-step procedure or formula for solving a problem or performing a task.',
      link: 'https://en.wikipedia.org/wiki/Algorithm',
    },
    {
      question: 'Which sorting algorithm has the best average-case time complexity?',
      options: ['Bubble Sort', 'Merge Sort', 'Insertion Sort', 'Quick Sort'],
      answer: 'Merge Sort',
      explanation: 'Merge Sort has an average-case time complexity of O(n log n), making it efficient for large datasets.',
      link: 'https://en.wikipedia.org/wiki/Merge_sort',
    },
    {
      question: 'Which component is considered the brain of the computer?',
      options: ['CPU', 'GPU', 'RAM', 'Hard Drive'],
      answer: 'CPU',
      explanation: 'The CPU (Central Processing Unit) is considered the brain of the computer because it performs most of the processing inside the computer.',
      link: 'https://en.wikipedia.org/wiki/CPU',
    },
    {
      question: 'What is a binary tree?',
      options: ['A tree data structure with a maximum of two children', 'A tree with only binary data', 'A type of graph', 'A tree used in database indexing'],
      answer: 'A tree data structure with a maximum of two children',
      explanation: 'A binary tree is a data structure in which each node has at most two children, referred to as the left child and the right child.',
      link: 'https://en.wikipedia.org/wiki/Binary_tree',
    },
    {
      question: 'Which of the following is not a programming paradigm?',
      options: ['Functional', 'Procedural', 'Object-Oriented', 'Linear'],
      answer: 'Linear',
      explanation: 'Linear is not a programming paradigm. The main paradigms include Functional, Procedural, and Object-Oriented.',
      link: 'https://en.wikipedia.org/wiki/Programming_paradigm',
    },
    {
      question: 'What is the purpose of version control systems?',
      options: ['To manage changes to source code', 'To run code faster', 'To compile code', 'To design user interfaces'],
      answer: 'To manage changes to source code',
      explanation: 'Version control systems help manage changes to source code over time, allowing multiple developers to collaborate effectively.',
      link: 'https://en.wikipedia.org/wiki/Version_control',
    },
    {
      question: 'What is the main difference between RAM and ROM?',
      options: ['RAM is volatile, ROM is non-volatile', 'RAM is non-volatile, ROM is volatile', 'RAM is slower, ROM is faster', 'RAM is used for storage, ROM is used for processing'],
      answer: 'RAM is volatile, ROM is non-volatile',
      explanation: 'RAM (Random Access Memory) is volatile, meaning it loses its data when power is off, while ROM (Read-Only Memory) is non-volatile and retains data even when power is off.',
      link: 'https://en.wikipedia.org/wiki/Random-access_memory',
    },
    {
      question: 'What is the purpose of a compiler?',
      options: ['To translate source code into machine code', 'To run the program', 'To store data', 'To manage memory'],
      answer: 'To translate source code into machine code',
      explanation: 'A compiler translates high-level source code written in a programming language into machine code that a computer’s processor can execute.',
      link: 'https://en.wikipedia.org/wiki/Compiler',
    },
    {
      question: 'What is the Big O notation used for?',
      options: ['To describe the performance of an algorithm', 'To write code efficiently', 'To manage memory allocation', 'To design user interfaces'],
      answer: 'To describe the performance of an algorithm',
      explanation: 'Big O notation is used to describe the time complexity and space complexity of an algorithm, providing an upper bound on its performance.',
      link: 'https://en.wikipedia.org/wiki/Big_O_notation',
    },
    {
      question: 'Which of the following is a type of machine learning?',
      options: ['Supervised Learning', 'Hardware Learning', 'Object-Oriented Learning', 'Data Learning'],
      answer: 'Supervised Learning',
      explanation: 'Supervised Learning is a type of machine learning where the model is trained on labeled data to make predictions or decisions.',
      link: 'https://en.wikipedia.org/wiki/Supervised_learning',
    },
    {
      question: 'What is the role of a database index?',
      options: ['To speed up query retrieval', 'To store data', 'To manage database connections', 'To backup data'],
      answer: 'To speed up query retrieval',
      explanation: 'A database index improves the speed of data retrieval operations on a database table at the cost of additional space and maintenance time.',
      link: 'https://en.wikipedia.org/wiki/Database_index',
    },
    {
      question: 'Which programming language is known for its use in data science and machine learning?',
      options: ['JavaScript', 'Java', 'Python', 'C++'],
      answer: 'Python',
      explanation: 'Python is widely used in data science and machine learning due to its simplicity and the extensive libraries available for these tasks.',
      link: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    },
    {
      question: 'What is a "null pointer" in programming?',
      options: ['A pointer that does not point to any memory location', 'A pointer with no value', 'A pointer to a function', 'A pointer with an invalid address'],
      answer: 'A pointer that does not point to any memory location',
      explanation: 'A null pointer is a pointer that does not point to any memory location and is often used to indicate that the pointer is not intended to reference any object.',
      link: 'https://en.wikipedia.org/wiki/Null_pointer',
    },
    {
      question: 'Which of the following is a common method of encryption?',
      options: ['AES', 'HTML', 'CSS', 'SQL'],
      answer: 'AES',
      explanation: 'AES (Advanced Encryption Standard) is a symmetric encryption algorithm widely used to secure data.',
      link: 'https://en.wikipedia.org/wiki/Advanced_Encryption_Standard',
    },
    {
      question: 'What does OOP stand for?',
      options: ['Object-Oriented Programming', 'Optimal Operations Programming', 'Original Object Programming', 'Operational Object Programming'],
      answer: 'Object-Oriented Programming',
      explanation: 'OOP stands for Object-Oriented Programming, a programming paradigm based on the concept of "objects", which can contain data and code.',
      link: 'https://en.wikipedia.org/wiki/Object-oriented_programming',
    },
    {
      question: 'What is the purpose of a software development lifecycle (SDLC)?',
      options: ['To manage software development from conception to deployment', 'To store software code', 'To execute software tests', 'To optimize software performance'],
      answer: 'To manage software development from conception to deployment',
      explanation: 'The SDLC is a process for planning, creating, testing, and deploying an information system. It helps manage the entire lifecycle of software development.',
      link: 'https://en.wikipedia.org/wiki/Software_development_life_cycle',
    },
    {
      question: 'Which of the following is a version control system?',
      options: ['Git', 'MySQL', 'PostgreSQL', 'SQLite'],
      answer: 'Git',
      explanation: 'Git is a distributed version control system used to track changes in source code during software development.',
      link: 'https://en.wikipedia.org/wiki/Git',
    }
  ];

const ComputerScienceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [timer, setTimer] = useState(10); // Timer set to 10 seconds

  useEffect(() => {
    if (timer === 0) {
      handleAnswer(null);
    } else {
      const timerId = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(timerId);
    }
  }, [timer]);

  const handleAnswer = (option) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
      setFeedback('Correct! ' + questions[currentQuestion].explanation);
    } else {
      setFeedback('Incorrect. ' + questions[currentQuestion].explanation);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setTimer(10);
    setCurrentQuestion((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="quiz-container">
      <h2>Computer Science Trivia Quiz</h2>
      <div className="question-section">
        <h3>{questions[currentQuestion].question}</h3>
        <div className="options">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="btn option-btn"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      {showFeedback && (
        <div className={`feedback ${feedback.startsWith('Correct') ? 'correct' : 'incorrect'}`}>
          <p>{feedback}</p>
          {questions[currentQuestion].link && (
            <a
              href={questions[currentQuestion].link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Learn More
            </a>
          )}
          <button onClick={handleNextQuestion} className="btn next-btn">
            Next Question
          </button>
        </div>
      )}
      <div className="timer">
        <h3>Time Remaining: {timer}s</h3>
      </div>
      <div className="score">
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default ComputerScienceQuiz;
