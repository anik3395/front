import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./VoteQuestion.css";

const VoteQuestion = () => {
  const { id } = useParams(); // Get the question ID from the URL
  const [question, setQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the question details from the API
    const fetchQuestion = async () => {
      try {
        const response = await fetch(`http://localhost:8080/question/${id}`);
        if (response.ok) {
          const data = await response.json();
          setQuestion(data);
        } else {
          setError("Failed to load the question.");
        }
      } catch (err) {
        setError("Failed to connect to the server.");
      }
    };

    fetchQuestion();
  }, [id]);

  const handleVote = async () => {
    if (!selectedOption) {
      alert("Please select an option to vote.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/question/vote/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ option: selectedOption }),
      });

      if (response.ok) {
        alert("Vote submitted successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to submit your vote.");
      }
    } catch (err) {
      setError("Failed to connect to the server.");
    }
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!question) {
    return <p>Loading...</p>;
  }

  return (
    <div className="vote-question-container">
      <h1 className="question-title">{question.question}</h1>
      <div className="options-container">
        {question.options.map((option, index) => (
          <div key={index} className="option">
            <input
              type="radio"
              id={`option${index}`}
              name="options"
              value={option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            <label htmlFor={`option${index}`}>{option}</label>
          </div>
        ))}
      </div>
      <button onClick={handleVote} className="vote-btn">Submit Vote</button>
    </div>
  );
};

export default VoteQuestion;
