import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { Autocomplete } from "@mui/material";
import { postTeam } from "../services";

export default function Form(props) {

  const [name, setName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [pkmn1, setPkmn1] = useState('')
  const [pkmn2, setPkmn2] = useState('')
  const [pkmn3, setPkmn3] = useState('')
  const [pkmn4, setPkmn4] = useState('')
  const [pkmn5, setPkmn5] = useState('')
  const [pkmn6, setPkmn6] = useState('')

  const [pkmn1ID, setPkmn1ID] = useState(0)
  const [pkmn2ID, setPkmn2ID] = useState(0)
  const [pkmn3ID, setPkmn3ID] = useState(0)
  const [pkmn4ID, setPkmn4ID] = useState(0)
  const [pkmn5ID, setPkmn5ID] = useState(0)
  const [pkmn6ID, setpkmn6ID] = useState(0)

  // console.log(pkmn1)
  console.log(props.pkmn)

  // get the pkmnID using the pkmnName
  // useEffect(() => {
  //   setpkmnID1(props.pkmn.data.id)

  // }, [pkmn1, pkmn2, pkmn3, pkmn4, pkmn5, pkmn6])


  // submit team to airtable
  const handleSubmit = async (e) => {
    e.preventDefault()
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
      pkmn6ID
    }

    if (props.pkmn) {
      const res = await postTeam(newTeam)
    }
    props.setToggle(prevToggle => !prevToggle)
  }



  return (
    <form >
      <teaminput>
        <input
          type='text'
          value={name}
          placeholder="Whats your name?"
          className='input'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={teamName}
          placeholder="Team name?"
          className='input'
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type='text'
          value={pkmn1}
          placeholder="1st pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn1(e.target.value)
            setPkmn1ID(props.pkmn.data.id)
            console.log(props.pkmn.data.id)
          }}
        />

        <input
          type='text'
          value={pkmn2}
          placeholder="2nd pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn2(e.target.value)
            setPkmn2ID(props.pkmn.data.id)
          }}

        />
        <input
          type='text'
          value={pkmn3}
          placeholder="3rd pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn3(e.target.value)
            setPkmn3ID(props.pkmn.data.id)
          }}
        />

        <input
          type='text'
          value={pkmn4}
          placeholder="4th pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn4(e.target.value)
            setPkmn4ID(props.pkmn.data.id)
          }} setpkmn5ID
        />
        <input
          type='text'
          value={pkmn5}
          placeholder="5th pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn5(e.target.value)
            setPkmn5ID(props.pkmn.data.id)
          }}
        />
        <input
          type='text'
          value={pkmn6}
          placeholder="6th pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn6(e.target.value)
            setpkmn6ID(props.pkmn.data.id)
          }}
        />
      </teaminput>

      <sprites>
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
      </sprites>
      <button type='submit' onSubmit={handleSubmit}><Link to={`/pokemonTeams`}>Submit and View Teams</Link></button>
    </form>
  )
}
