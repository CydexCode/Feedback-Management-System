import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store feedback responses
  const [feedback, setFeedback] = useState({});

  // Function to handle feedback submission
  const submitFeedback = () => {
    // Assuming you want to log the feedback data for now
    console.log(feedback);
    // Reset feedback state after submission
    setFeedback({});
  };

  return (
    <div className="App">
      <h1>Course Feedback</h1>
      <p>Course Code: </p>
      <p>Date: {new Date().toLocaleDateString()}</p>
      <hr />
      {/* Buttons for feedback */}
      <div>
        <button onClick={() => setFeedback({ ...feedback, response: 'Strongly Agree' })}>Strongly Agree</button>
        <button onClick={() => setFeedback({ ...feedback, response: 'Agree' })}>Agree</button>
        <button onClick={() => setFeedback({ ...feedback, response: 'Not Sure' })}>Not Sure</button>
        <button onClick={() => setFeedback({ ...feedback, response: 'Disagree' })}>Disagree</button>
        <button onClick={() => setFeedback({ ...feedback, response: 'Strongly Disagree' })}>Strongly Disagree</button>
      </div>
      <hr />
      {/* General questions */}
      <h2>Please respond to the following statements:</h2>
      <div>
        <p>General Question 1:</p>
        <input
          type="text"
          value={feedback.generalQuestion1 || ''}
          onChange={(e) => setFeedback({ ...feedback, generalQuestion1: e.target.value })}
        />
      </div>
      <div>
        <p>General Question 2:</p>
        {/* Example of using radio buttons */}
        <label>
          <input
            type="radio"
            value="Option 1"
            checked={feedback.generalQuestion2 === 'Option 1'}
            onChange={(e) => setFeedback({ ...feedback, generalQuestion2: e.target.value })}
          />
          Option 1
        </label>
        <label>
          <input
            type="radio"
            value="Option 2"
            checked={feedback.generalQuestion2 === 'Option 2'}
            onChange={(e) => setFeedback({ ...feedback, generalQuestion2: e.target.value })}
          />
          Option 2
        </label>
      </div>
      {/* Add more general questions as needed */}
      <button onClick={submitFeedback}>Submit</button>
    </div>
  );
}

export default App;
