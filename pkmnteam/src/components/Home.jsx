import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const navigate = useNavigate();
  const iconURL =
    "https://toppng.com/uploads/preview/okeball-pokeball-pixel-11562866044nlupenwzqu.png";

  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/build')
    };
  
  return (
    <div className="home" >
      <h2>Hello trainer! Whats your name?</h2>
      <input
        type="text"
        value={props.name}
        placeholder="Name?"
        className="input"
        onChange={(e) => 
          props.setName(e.target.value)
        }
      />
      <button onClick={handleSubmit}>
        {<img
          className="pokeball"
          src={iconURL}
          alt="pokeball icon" />}
      </button>
    </div>
  );
}

// onSubmit={navigate("/build")