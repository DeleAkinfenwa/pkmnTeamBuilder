import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postTeam } from "../services";

export default function Form(props) {
  const {
    pkmn1ID,
    pkmn2ID,
    pkmn3ID,
    pkmn4ID,
    pkmn5ID,
    pkmn6ID,
    pkmn1,
    pkmn2,
    pkmn3,
    pkmn4,
    pkmn5,
    pkmn6,
  } = props;

  const navigate = useNavigate();

  const [teamName, setTeamName] = useState("");
  // const [pkmn1, setPkmn1] = useState("");
  // const [pkmn2, setPkmn2] = useState("");
  // const [pkmn3, setPkmn3] = useState("");
  // const [pkmn4, setPkmn4] = useState("");
  // const [pkmn5, setPkmn5] = useState("");
  // const [pkmn6, setPkmn6] = useState("");


  const name = props.name;

  // submit team to airtable
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTeam = {
      name,
      teamName,
      pkmn1,
      pkmn1ID,
      pkmn2,
      pkmn2ID,
      pkmn3,
      pkmn3ID,
      pkmn4,
      pkmn4ID,
      pkmn5,
      pkmn5ID,
      pkmn6,
      pkmn6ID,
    };

    console.log("i was clicked");
    const res = await postTeam(newTeam);

    props.setToggle((prevToggle) => !prevToggle);
    navigate('/pokemonTeams')
  };

  const iconURL =
    "https://toppng.com/uploads/preview/okeball-pokeball-pixel-11562866044nlupenwzqu.png";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="formInput">
        <input
          type="text"
          value={teamName}
          placeholder="Team name?"
          className="input"
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type="text"
          value={pkmn1}
          placeholder="1st pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn1(e.target.value);
            // setPkmn1ID(props.pkmn.data.id)
          }}
        />

        <input
          type="text"
          value={pkmn2}
          placeholder="2nd pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn2(e.target.value);
            // setPkmn2ID(props.pkmn.data.id);
          }}
        />
        <input
          type="text"
          value={pkmn3}
          placeholder="3rd pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn3(e.target.value);
            // setPkmn3ID(props.pkmn.data.id);
          }}
        />

        <input
          type="text"
          value={pkmn4}
          placeholder="4th pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn4(e.target.value);
            // setPkmn4ID(props.pkmn.data.id);
          }}
        />
        <input
          type="text"
          value={pkmn5}
          placeholder="5th pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn5(e.target.value);
            // setPkmn5ID(props.pkmn.data.id);
          }}
        />
        <input
          type="text"
          value={pkmn6}
          placeholder="6th pokemon"
          className="input"
          onChange={(e) => {
            props.setPkmnName(e.target.value);
            props.setPkmn6(e.target.value);
            // setPkmn6ID(props.pkmn.data.id);
          }}
        />
      </div>

      <div className="teamBuildSprites">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn1ID}.png`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn2ID}.png`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn3ID}.png`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn4ID}.png`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn5ID}.png`}
        />
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn6ID}.png`}
        />
      </div>
      <button type="submit">
        {<img className="pokeball" src={iconURL} alt="pokeball icon" />}
      </button>
    </form>
  );
}
