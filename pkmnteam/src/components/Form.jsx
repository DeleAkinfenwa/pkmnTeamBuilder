import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const name = props.name;
  const [teamName, setTeamName] = useState("");

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
    if (res) {
      navigate("/pokemonTeams");
    }
  };

  const iconURL =
    "https://toppng.com/uploads/preview/okeball-pokeball-pixel-11562866044nlupenwzqu.png";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className="text">{`Alright, ${name}, it's time to pick your team! Type in a pokemon name or number in the pokemon slots.`}</h3>
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
            props.updatePkmn1(e.target.value);
          }}
        />

        <input
          type="text"
          value={pkmn2}
          placeholder="2nd pokemon"
          className="input"
          onChange={(e) => {
            props.updatePkmn2(e.target.value);
          }}
        />
        <input
          type="text"
          value={pkmn3}
          placeholder="3rd pokemon"
          className="input"
          onChange={(e) => {
            props.updatePkmn3(e.target.value);
          }}
        />

        <input
          type="text"
          value={pkmn4}
          placeholder="4th pokemon"
          className="input"
          onChange={(e) => {
            props.updatePkmn4(e.target.value);
          }}
        />
        <input
          type="text"
          value={pkmn5}
          placeholder="5th pokemon"
          className="input"
          onChange={(e) => {
            props.updatePkmn5(e.target.value);
          }}
        />
        <input
          type="text"
          value={pkmn6}
          placeholder="6th pokemon"
          className="input"
          onChange={(e) => {
            props.updatePkmn6(e.target.value);
          }}
        />
      </div>

      <div className="teamBuildSprites">
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn1ID}.png`}
          alt="pkmn sprite"
        />
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn2ID}.png`}
          alt="pkmn sprite"
        />
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn3ID}.png`}
          alt="pkmn sprite"
        />
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn4ID}.png`}
          alt="pkmn sprite"
        />
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn5ID}.png`}
          alt="pkmn sprite"
        />
        <img
          className="sprite"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn6ID}.png`}
          alt="pkmn sprite"
        />
      </div>
      <button type="submit" className="formButton">
        {<img className="pokeball" src={iconURL} alt="pokeball icon" />}
      </button>
    </form>
  );
}
