import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='Navbar'>
      <Link to='/' className='headerLinks'>Home</Link>
      <Link to='/build' className='headerLinks'>Build a team</Link>
      <Link to='/pokemonTeams' className='headerLinks'>View other teams</Link>
    </div>
  )
}