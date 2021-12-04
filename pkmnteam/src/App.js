
import './App.css';
import { getPkmn, getTeams, postTeam } from './services'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import { Autocomplete } from '@mui/material';



function App() {

  const [pkmn, setPkmn] = useState([])
  const [team, setTeams] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // pull data for specific pokemon
    const onePkmn = async () => {
      const res = await getPkmn()
      setPkmn(res)
      // console.log(res)
    }
    onePkmn()
    // pull list of teams from airtable
    const pkmnTeams = async () => {
      const res = await getTeams()
      setTeams(res)
      console.log(res)
    }
    pkmnTeams()

  }, [toggle])


  return (
    <div className="App">

      <h1>Pkmn Team Builder</h1>
      <Routes>
        <Route path='/' element={<Form pkmn={pkmn} setToggle={setToggle} />} />
      </Routes>
    </div>
  );
}

export default App;
