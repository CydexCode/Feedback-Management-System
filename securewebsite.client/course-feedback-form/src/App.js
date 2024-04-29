import React, { useState } from 'react';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState({
    courseUnit: '',
    date: '',
    responses: {}
  });

  const handleChange = (statement, value) => {
    setFeedback({
      ...feedback,
      responses: {
        ...feedback.responses,
        [statement]: value
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(feedback);
    // Add logic to submit feedback data
  };

  return (
    <div className="App">
      <h1>COURSE EVALUATION</h1>
      <p>
        This questionnaire intends to collect feedback from the students about the course unit.
        Your valuable feedback will be vital for us to strengthen the teaching-learning environment
        to achieve excellence in teaching and learning.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Course Unit:
          <input
            type="text"
            value={feedback.courseUnit}
            onChange={(e) => setFeedback({ ...feedback, courseUnit: e.target.value })}
            required
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            value={feedback.date}
            onChange={(e) => setFeedback({ ...feedback, date: e.target.value })}
            required
          />
        </label>
        <hr />
        <h2>A. General</h2>
        <Statement
          statement="i. This course helped me to enhance my knowledge"
          onChange={(value) => handleChange('A-i', value)}
        />
        <Statement
          statement="ii. The workload of the course was manageable"
          onChange={(value) => handleChange('A-ii', value)}
        />
        <Statement
          statement="iii. The course was interesting"
          onChange={(value) => handleChange('A-iii', value)}
        />
        {/* Add more statements as needed */}
        <hr />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const Statement = ({ statement, onChange }) => {
  const options = ['Strongly Disagree', 'Disagree', 'Not Sure', 'Agree', 'Strongly Agree'];

  return (
    <div>
      <p>{statement}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="radio"
            name={statement}
            value={index - 2}
            onChange={(e) => onChange(parseInt(e.target.value))}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default App;
