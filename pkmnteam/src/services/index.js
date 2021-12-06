import axios from 'axios'


export const baseURL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/pkmnTeam`
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
  }
}

export const getPkmn = async (pkmnID) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmnID}`)
  console.log(pkmnID)
  return response
}

export const getTeams = async () => {
  const response = await axios.get(baseURL, config)
  return response.data.records
}

export const postTeam = async (body) => {
  const response = await axios.post(baseURL, { fields: body }, config)
  return response.data
}
