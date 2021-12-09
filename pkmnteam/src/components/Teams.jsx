import React from "react";

export default function Teams(props) {
  return (
    <div>
      <h3 className="teamtext">List of pokemon teams</h3>
      <div className="team">
        {props.teams.map((team, key) => (
          <div className="teamViewSprites" key={key}>
            <p className="teamTitle">{`${team.fields.name}'s team, ${team.fields.teamName}`}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn1ID}.png`}
              alt="pkmn sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn2ID}.png`}
              alt="pkmn sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn3ID}.png`}
              alt="pkmn sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn4ID}.png`}
              alt="pkmn sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn5ID}.png`}
              alt="pkmn sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn6ID}.png`}
              alt="pkmn sprite"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
