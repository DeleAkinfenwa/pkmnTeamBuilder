import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTeams } from '../services'

export default function Teams(props) {

  console.log(props.teams)

  props.teams.forEach(team => {

    //   const pkmn1 = team.pkmn1.data.sprites.front_default
    //   const pkmn2 = team.pkmn2.data.sprites.front_default
    //   const pkmn3 = team.pkmn3.data.sprites.front_default
    //   const pkmn4 = team.pkmn4.data.sprites.front_default
    //   const pkmn5 = team.pkmn5.data.sprites.front_default
    //   const pkmn6 = team.pkmn6.data.sprites.front_default
    //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnNum}.png`


  }
  );

  // (pkmn1, pkmn2, pkmn3, pkmn4, pkmn5, pkmn6)
  return (
    <div>
      <h3>List of pokemon teams</h3>
      <sprites>
        {/* <img
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
        /> */}
      </sprites>
    </div >
  )
}
