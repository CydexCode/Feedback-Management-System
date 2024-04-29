console.log("Hello World!")
import React from 'react';
import './App.css'; // Assuming you have an App.css file for styling

const App = ({ userName }) => {
    return (
        <div className="app-container">
            <h1>Student Feedback Management System</h1>
            <p>Welcome {userName}</p>
            <form className="student-form">
                <div className="form-group">
                    <label>Reg No:</label>
                    <input type="text" name="regNo" />
                </div>
                <div className="form-group">
                    <label>Batch:</label>
                    <input type="text" name="batch" />
                </div>
                <div className="form-group">
                    <label>Academic year:</label>
                    <input type="text" name="academicYear" />
                </div>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="profile-section">
                {/* Profile section content goes here */}
                {/* You can add profile information dynamically */}
            </div>
            <div className="button-section">
                <button className="edit-button">Edit</button>
                <button className="remove-button">Remove</button>
            </div>
        </div>
    );
};

export default App;
