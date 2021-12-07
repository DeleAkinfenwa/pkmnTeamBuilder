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

  const [pkmnID1, setpkmnID1] = useState(0)
  const [pkmnID2, setpkmnID2] = useState(0)
  const [pkmnID3, setpkmnID3] = useState(0)
  const [pkmnID4, setpkmnID4] = useState(0)
  const [pkmnID5, setpkmnID5] = useState(0)
  const [pkmnID6, setpkmnID6] = useState(0)

  // console.log(pkmn1)
  console.log(props.pkmn)

  // get the pkmnID using the pkmnName
  useEffect(() => {
    setpkmnID1(props.pkmn.data.id)

  }, [pkmn1, pkmn2, pkmn3, pkmn4, pkmn5, pkmn6])


  // submit team to airtable
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newTeam = {
      name,
      teamName,
      pkmn1,
      pkmn2,
      pkmn3,
      pkmn4,
      pkmn5,
      pkmn6
    }


    console.log(props.pkmn.data.id)

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
          }}
        />
        <input
          type='text'
          value={pkmn5}
          placeholder="5th pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn5(e.target.value)
          }}
        />
        <input
          type='text'
          value={pkmn6}
          placeholder="6th pokemon"
          className='input'
          onChange={(e) => {
            props.setPkmnName(e.target.value)
            setPkmn5(e.target.value)
          }}
        />
      </teaminput>

      <sprites>
        <img onChange={pkmnID1 = props.pkmn.data.id} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnID1}.png`} />
      </sprites>
      <button type='submit' onSubmit={handleSubmit}><Link to={`/pokemonTeams`}>Submit and View Teams</Link></button>
    </form>
  )
}
