// // src/App.js

// import React, { useState } from "react";
// import { QRCodeSVG } from "qrcode.react";
// import "./App.css";

// const questions = [
//   {
//     question: "What is the capital of France?",
//     options: ["A: Paris", "B: London", "C: Berlin", "D: Madrid"],
//     correctAnswer: "A",
//   },
//   {
//     question: "Who developed the theory of relativity?",
//     options: ["A: Newton", "B: Einstein", "C: Galileo", "D: Tesla"],
//     correctAnswer: "B",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["A: Mars", "B: Venus", "C: Jupiter", "D: Saturn"],
//     correctAnswer: "A",
//   },
//   {
//     question: "What is the largest ocean on Earth?",
//     options: ["A: Atlantic", "B: Indian", "C: Arctic", "D: Pacific"],
//     correctAnswer: "D",
//   },
//   {
//     question: "Who wrote 'To Kill a Mockingbird'?",
//     options: [
//       "A: Harper Lee",
//       "B: Mark Twain",
//       "C: J.K. Rowling",
//       "D: Ernest Hemingway",
//     ],
//     correctAnswer: "A",
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     options: ["A: Ag", "B: Au", "C: Pb", "D: Fe"],
//     correctAnswer: "B",
//   },
//   {
//     question: "Which country hosted the 2016 Summer Olympics?",
//     options: ["A: China", "B: Brazil", "C: USA", "D: Japan"],
//     correctAnswer: "B",
//   },
//   {
//     question: "Who is the author of '1984'?",
//     options: [
//       "A: Aldous Huxley",
//       "B: George Orwell",
//       "C: Leo Tolstoy",
//       "D: Fyodor Dostoevsky",
//     ],
//     correctAnswer: "B",
//   },
//   {
//     question: "Which element has the atomic number 1?",
//     options: ["A: Oxygen", "B: Hydrogen", "C: Helium", "D: Nitrogen"],
//     correctAnswer: "B",
//   },
//   {
//     question: "What is the tallest mountain in the world?",
//     options: [
//       "A: K2",
//       "B: Mount Kilimanjaro",
//       "C: Mount Everest",
//       "D: Mount Fuji",
//     ],
//     correctAnswer: "C",
//   },
// ];

// function App() {
//   const [players, setPlayers] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [mobileView, setMobileView] = useState(false);
//   // const [currentAnswer, setCurrentAnswer] = useState("");
//   const [message, setMessage] = useState("");

//   const handlePlayerJoin = (name) => {
//     setPlayers([...players, name]);
//   };

//   const handleAnswerSubmit = (answer) => {
//     if (answer === questions[currentQuestion].correctAnswer) {
//       setMessage(`Correct! Moving to next question.`);
//       setTimeout(() => {
//         setMessage("");
//         setCurrentQuestion(currentQuestion + 1);
//       }, 2000);
//     } else {
//       setMessage("Incorrect! Try again.");
//     }
//   };

//   return (
//     <div className="app-container">
//       {/* Main Computer Screen */}
//       {!mobileView ? (
//         <div className="main-screen">
//           <h1>KBC Style Game</h1>
//           <QRCodeSVG value={window.location.href + "?mobile=true"} size={150} />
//           <h3>Scan the QR code to join!</h3>

//           <div className="players">
//             <h2>Players Joined:</h2>
//             {players.length > 0 ? (
//               players.map((player, index) => <p key={index}>{player}</p>)
//             ) : (
//               <p>No players yet</p>
//             )}
//           </div>

//           {currentQuestion < questions.length ? (
//             <div className="question-section">
//               <h2>{questions[currentQuestion].question}</h2>
//               <div className="options">
//                 {questions[currentQuestion].options.map((option, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleAnswerSubmit(option[0])}
//                   >
//                     {option}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           ) : (
//             <h2>Game Over! Thanks for playing.</h2>
//           )}

//           {message && <p className="message">{message}</p>}
//         </div>
//       ) : (
//         // Mobile Screen
//         <MobileScreen
//           onJoin={handlePlayerJoin}
//           currentQuestion={questions[currentQuestion]}
//           onAnswerSubmit={handleAnswerSubmit}
//           message={message}
//         />
//       )}
//     </div>
//   );
// }

// function MobileScreen({ onJoin, currentQuestion, onAnswerSubmit, message }) {
//   const [playerName, setPlayerName] = useState("");
//   const [joined, setJoined] = useState(false);

//   const handleJoin = () => {
//     onJoin(playerName);
//     setJoined(true);
//   };

//   return (
//     <div className="mobile-screen">
//       {!joined ? (
//         <>
//           <h2>Enter your name to join:</h2>
//           <input
//             type="text"
//             value={playerName}
//             onChange={(e) => setPlayerName(e.target.value)}
//           />
//           <button onClick={handleJoin}>Join Game</button>
//         </>
//       ) : (
//         <div className="question-section">
//           <h2>{currentQuestion.question}</h2>
//           <div className="options">
//             {currentQuestion.options.map((option, index) => (
//               <button key={index} onClick={() => onAnswerSubmit(option[0])}>
//                 {option}
//               </button>
//             ))}
//           </div>
//           {message && <p className="message">{message}</p>}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// src/App.js

import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./App.css";

// 10 questions
const questions = [
  {
    question: "What is the capital of France?",
    options: ["A: Paris", "B: London", "C: Berlin", "D: Madrid"],
    correctAnswer: "A",
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["A: Newton", "B: Einstein", "C: Galileo", "D: Tesla"],
    correctAnswer: "B",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["A: Mars", "B: Venus", "C: Jupiter", "D: Saturn"],
    correctAnswer: "A",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["A: Atlantic", "B: Indian", "C: Arctic", "D: Pacific"],
    correctAnswer: "D",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: [
      "A: Harper Lee",
      "B: Mark Twain",
      "C: J.K. Rowling",
      "D: Ernest Hemingway",
    ],
    correctAnswer: "A",
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["A: Ag", "B: Au", "C: Pb", "D: Fe"],
    correctAnswer: "B",
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    options: ["A: China", "B: Brazil", "C: USA", "D: Japan"],
    correctAnswer: "B",
  },
  {
    question: "Who is the author of '1984'?",
    options: [
      "A: Aldous Huxley",
      "B: George Orwell",
      "C: Leo Tolstoy",
      "D: Fyodor Dostoevsky",
    ],
    correctAnswer: "B",
  },
  {
    question: "Which element has the atomic number 1?",
    options: ["A: Oxygen", "B: Hydrogen", "C: Helium", "D: Nitrogen"],
    correctAnswer: "B",
  },
  {
    question: "What is the tallest mountain in the world?",
    options: [
      "A: K2",
      "B: Mount Kilimanjaro",
      "C: Mount Everest",
      "D: Mount Fuji",
    ],
    correctAnswer: "C",
  },
];

function App() {
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mobileView, setMobileView] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [message, setMessage] = useState("");

  // Check if user is viewing on mobile via query string
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("mobile") === "true") {
      setMobileView(true);
    }
  }, []);

  // Handle player joining
  const handlePlayerJoin = (name) => {
    setPlayers((prevPlayers) => [...prevPlayers, name]);
  };

  // Handle answer submission
  const handleAnswerSubmit = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setMessage(`Correct! Moving to next question.`);
      setTimeout(() => {
        setMessage("");
        setCurrentQuestion(currentQuestion + 1);
      }, 2000);
    } else {
      setMessage("Incorrect! Try again.");
    }
  };

  return (
    <div className="app-container">
      {/* Main Computer Screen */}
      {!mobileView ? (
        <div className="main-screen">
          <h1>KBC Style Game</h1>
          <QRCodeSVG value={window.location.href + "?mobile=true"} size={150} />
          <h3>Scan the QR code to join!</h3>

          <div className="players">
            <h2>Players Joined:</h2>
            {players.length > 0 ? (
              players.map((player, index) => <p key={index}>{player}</p>)
            ) : (
              <p>No players yet</p>
            )}
          </div>

          {currentQuestion < questions.length ? (
            <div className="question-section">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSubmit(option[0])}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <h2>Game Over! Thanks for playing.</h2>
          )}

          {message && <p className="message">{message}</p>}
        </div>
      ) : (
        // Mobile Screen
        <MobileScreen
          onJoin={handlePlayerJoin}
          currentQuestion={questions[currentQuestion]}
          onAnswerSubmit={handleAnswerSubmit}
          message={message}
        />
      )}
    </div>
  );
}

// Mobile Screen Component
function MobileScreen({ onJoin, currentQuestion, onAnswerSubmit, message }) {
  const [playerName, setPlayerName] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    onJoin(playerName);
    setJoined(true);
  };

  return (
    <div className="mobile-screen">
      {!joined ? (
        <>
          <h2>Enter your name to join:</h2>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <button onClick={handleJoin}>Join Game</button>
        </>
      ) : (
        <div className="question-section">
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => onAnswerSubmit(option[0])}>
                {option}
              </button>
            ))}
          </div>
          {message && <p className="message">{message}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
