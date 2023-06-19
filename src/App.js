import React, { useState } from "react";

const App = () => {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dob);

    let yearsDiff = today.getFullYear() - birthDate.getFullYear();

    // Check if the birthday hasn't occurred yet this year
    const hasBirthdayNotOccurred =
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate());

    if (hasBirthdayNotOccurred) {
      yearsDiff--;
    }

    setAge(yearsDiff);
  };

  // ...
  return (
    <center>
      <div className="container">
        <h1>Age Calculator</h1>
        <form className="form">
          <label htmlFor="dob" className="label">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(event) => setDob(event.target.value)}
            className="input"
          />
          <button onClick={calculateAge} className="button">
            Calculate Age
          </button>
          {age !== "" && <p className="result">Age: {age} years</p>}
        </form>
      </div>
    </center>
  );
  // ...
};

export default App;
