import React from "react";

export default function Teams(props) {
  console.log(props.teams);

  return (
    <div>
      <h3 className="teamtext">List of pokemon teams</h3>
      <team className="team">
        {props.teams.map((team) => (
          <div className="teamViewSprites">
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
      </team>
    </div>
  );
}
