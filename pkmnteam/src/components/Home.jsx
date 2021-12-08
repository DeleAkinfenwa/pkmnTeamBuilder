import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home(props) {

  const [name, setName] = useState('')

  const iconURL = 'https://toppng.com/uploads/preview/okeball-pokeball-pixel-11562866044nlupenwzqu.png'

  return (
    <div className='home' >
      <h2>Hello trainer! Whats your name?</h2>
      <input
        type='text'
        value={name}
        placeholder="Name?"
        className='input'
        onChange=
        {(e) => setName(e.target.value)}
      />
      <button><Link to='/build'>{<img className='pokeball' src={iconURL} alt='pokeball icon' />}</Link></button>
    </div>
  )
}
