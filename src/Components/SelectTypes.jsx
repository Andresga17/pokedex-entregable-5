import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectTypes = ({ setSelectValue, setPage }) => {

  const [types, setTypes] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type'
    axios.get(URL)
      .then(res => setTypes(res.data))
      .catch(err => console.log(err))
  }, [])

  const handleChange = e => {
    setSelectValue(e.target.value)
    setPage(1)
  }
  
  return (
    <select className='select-type__select' onChange={handleChange}>
        <option value="allpokemons">All Pokemons</option>
        {
          types?.results.map(type => (
            <option key={type.url} value={type.url}>{type.name}</option>
          ))
        }
    </select>
  )
}

export default SelectTypes
