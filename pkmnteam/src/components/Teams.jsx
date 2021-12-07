import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTeams } from '../services'

export default function Teams(props) {
  console.log(props.teams)

  return (
    <div>
      <h3>List of pokemon teams</h3>
      <team className='team'>
        {props.teams.map((team) => (
          <sprites className='teamSprites'>
            <p>{`${team.fields.name}'s team`}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn1ID}.png`}
              alt='pkmn sprite'
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn2ID}.png`}
              alt='pkmn sprite'
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn3ID}.png`}
              alt='pkmn sprite'
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn4ID}.png`}
              alt='pkmn sprite'
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn5ID}.png`}
              alt='pkmn sprite'
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${team.fields.pkmn6ID}.png`}
              alt='pkmn sprite'
            />
          </sprites>
        ))}
      </team>
    </div>
  )
}
