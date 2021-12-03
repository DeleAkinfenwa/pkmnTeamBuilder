
import './App.css';
import { getPkmn, getTeams, postTeam } from './services'
import { useState, useEffect } from 'react'
import { Routes } from 'react-router';
import { Routes, Route } from 'react-router-dom'
import Form from './components'



function App() {

  const [pkmn, setPkmn] = useState('')
  const [team, setTeam] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    // pull data for specific pokemon
    const onePkmn = async () => {
      const res = await getPkmn()
      setPkmn(res)
      console.log(res)
    }
    onePkmn()

  }, [toggle])


  return (
    <div className="App">
      <h1>Pkmn Team Builder</h1>
      <Routes>
        <Route path='/Build' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
