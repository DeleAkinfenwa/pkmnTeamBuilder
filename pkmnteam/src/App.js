import "./App.css";
import { getPkmn, getTeams } from "./services";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Teams from "./components/Teams";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [teams, setTeams] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [name, setName] = useState("");

  // Getting the pkmn ID's(numbers) to use for the sprites
  const [pkmn1ID, setPkmn1ID] = useState(0);
  const [pkmn2ID, setPkmn2ID] = useState(0);
  const [pkmn3ID, setPkmn3ID] = useState(0);
  const [pkmn4ID, setPkmn4ID] = useState(0);
  const [pkmn5ID, setPkmn5ID] = useState(0);
  const [pkmn6ID, setPkmn6ID] = useState(0);

  // getting API data on specific pokemon from each form slot
  const updatePkmn1 = (pkmnName) => {
    const onePkmn = async () => {
      const slot1 = await getPkmn(pkmnName);
      setPkmn1ID(slot1.data.id);
    };
    onePkmn();
  };
  const updatePkmn2 = (pkmnName) => {
    const onePkmn = async () => {
      const slot2 = await getPkmn(pkmnName);
      setPkmn2ID(slot2.data.id);
    };
    onePkmn();
  };
  const updatePkmn3 = (pkmnName) => {
    const onePkmn = async () => {
      const slot3 = await getPkmn(pkmnName);
      setPkmn3ID(slot3.data.id);
    };
    onePkmn();
  };
  const updatePkmn4 = (pkmnName) => {
    const onePkmn = async () => {
      const slot4 = await getPkmn(pkmnName);
      setPkmn4ID(slot4.data.id);
    };
    onePkmn();
  };
  const updatePkmn5 = (pkmnName) => {
    const onePkmn = async () => {
      const slot5 = await getPkmn(pkmnName);
      setPkmn5ID(slot5.data.id);
    };
    onePkmn();
  };
  const updatePkmn6 = (pkmnName) => {
    const onePkmn = async () => {
      const slot6 = await getPkmn(pkmnName);
      setPkmn6ID(slot6.data.id);
    };
    onePkmn();
  };

  // pull list of teams from airtable
  useEffect(() => {
    const pkmnTeams = async () => {
      const res = await getTeams();
      setTeams(res);
    };
    pkmnTeams();
  }, [toggle]);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <Navbar />
      </nav>
      <div className="body">
        <Routes>
          <Route
            path="/"
            element={
              <Home setToggle={setToggle} name={name} setName={setName} />
            }
          />
          <Route
            path="/build"
            element={
              <Form
                setToggle={setToggle}
                name={name}
                pkmn1ID={pkmn1ID}
                pkmn2ID={pkmn2ID}
                pkmn3ID={pkmn3ID}
                pkmn4ID={pkmn4ID}
                pkmn5ID={pkmn5ID}
                pkmn6ID={pkmn6ID}
                updatePkmn1={updatePkmn1}
                updatePkmn2={updatePkmn2}
                updatePkmn3={updatePkmn3}
                updatePkmn4={updatePkmn4}
                updatePkmn5={updatePkmn5}
                updatePkmn6={updatePkmn6}
              />
            }
          />
          <Route path="/pokemonTeams" element={<Teams teams={teams} />} />
        </Routes>
      </div>
      <footer>
        <Footer className="footer" />
      </footer>
    </div>
  );
}

export default App;
