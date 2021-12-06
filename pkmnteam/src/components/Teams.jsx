import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getTeams } from '../services'

export default function Teams(props) {
  const [teams, setTeams] = useState([])

  const params = useParams()

  useEffect(() => {
    const teamList = props.teams.find(teams => {
      return teams.id === params.id
    })
    setTeams(teamList)
  }, [props.teams])


  // console.log(props.teams.fields)

  return (
    <div>
      <h3>List of pokemon teams</h3>

    </div>
  )
}
