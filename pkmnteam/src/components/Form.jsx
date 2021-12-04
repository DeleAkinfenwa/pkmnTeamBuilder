import React, { useState, useEffect } from "react";
import { Autocomplete } from "@mui/material";
import { getTeams, postTeam } from "../services";

export default function Form(props) {
  const [name, setName] = useState('')
  const [teamName, setTeamName] = useState('')
  const [pkmn1, setPkmn1] = useState('')
  const [pkmn2, setPkmn2] = useState('')
  const [pkmn3, setPkmn3] = useState('')
  const [pkmn4, setPkmn4] = useState('')
  const [pkmn5, setPkmn5] = useState('')
  const [pkmn6, setPkmn6] = useState('')

  console.log(props.pkmn.data.name)

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
    if (props.pkmn) {
      const res = await postTeam(newTeam)
      props.setToggle(prevToggle => !prevToggle)
    }
  }



  return (
    <form onSubmit={handleSubmit}>
      <>
        <input
          type='text'
          value={name}
          name='Name'
          placeholder="Whats your name?"
          className='input'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={teamName}
          name='Team Name'
          placeholder="Team name?"
          className='input'
          onChange={(e) => setTeamName(e.target.value)}
        />
        <input
          type='text'
          value={pkmn1}
          name='pkmn1'
          placeholder="1st pokemon"
          className='input'
          onChange={(e) => setPkmn1(e.target.value)}
        />
        <input
          type='text'
          value={pkmn2}
          name='pkmn2'
          placeholder="2nd pokemon"
          className='input'
          onChange={(e) => setPkmn2(e.target.value)}
        />
        <input
          type='text'
          value={pkmn3}
          name='pkmn3'
          placeholder="3rd pokemon"
          className='input'
          onChange={(e) => setPkmn3(e.target.value)}
        />
        <input
          type='text'
          value={pkmn4}
          name='pkmn4'
          placeholder="4th pokemon"
          className='input'
          onChange={(e) => setPkmn4(e.target.value)}
        />
        <input
          type='text'
          value={pkmn5}
          name='pkmn5'
          placeholder="5th pokemon"
          className='input'
          onChange={(e) => setPkmn5(e.target.value)}
        />
        <input
          type='text'
          value={pkmn6}
          name='pkmn6'
          placeholder="6th pokemon"
          className='input'
          onChange={(e) => setPkmn6(e.target.value)}
        />
      </>
      <button type='submit'>Submit</button>
    </form>
  )
}
