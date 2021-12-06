
import './App.css';
import { getPkmn, getTeams, postTeam } from './services'
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import { Autocomplete } from '@mui/material';
import Navbar from './components/Navbar';
import Teams from './components/Teams';



function App() {

  const [pkmn, setPkmn] = useState([])
  const [teams, setTeams] = useState([])
  const [toggle, setToggle] = useState(false)
  const [pkmnID, setPkmnID] = useState('')


  useEffect(() => {
    // pull data for specific pokemon
    const onePkmn = async () => {
      const res = await getPkmn(pkmnID)
      setPkmn(res)
      console.log(res)
    }
    onePkmn()
    // pull list of teams from airtable
    const pkmnTeams = async () => {
      const res = await getTeams()
      setTeams(res)
      console.log(res)
    }
    pkmnTeams()

  }, [toggle, pkmnID])


  return (
    <div className="App">
      <h1>Pkmn Team Builder</h1>
      {/* <Navbar /> */}

      <Routes>
        <Route path='/' element='Hello Trainer' />
        <Route path='/build' element={<Form pkmn={pkmn} setToggle={setToggle} setPkmnID={setPkmnID} />} />
        {/* <Route path='/pokemonTeams' element={<Teams teams={teams} />} /> */}

      </Routes>
    </div>
  );
}

export default App;
