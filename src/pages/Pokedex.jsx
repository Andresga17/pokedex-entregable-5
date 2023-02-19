import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokeCard from '../Components/Pokedex/PokeCard';
import SelectTypes from '../Components/SelectTypes';

const Pokedex = () => {

  const { nameTrainer } = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const [selectValue, setSelectValue] = useState('allpokemons')

  useEffect(() => {
    if(selectValue === 'allpokemons') {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0'
      axios.get(URL)
        .then(res => setPokemons(res.data))
        .catch(err => console.log(err))
    }else {
      axios.get(selectValue)
        .then(res => {
          const results = res.data.pokemon.map(e => e.pokemon)
          setPokemons({results})
        })
        .catch(err => console.log(err))
    }

  }, [selectValue])

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.pokemon.value.trim().toLowerCase()}`)
    e.target.pokemon.value = ''
  }

  // console.log(pokemons)k

  return (
    <div>
        <header>
            <img src="/public/images/pokedex-img.svg" alt="" />
        </header>
        <h1><span>Hi {nameTrainer}</span>, her find your favorite pokemon</h1>
        <form onSubmit={handleSubmit}>
          <input id='pokemon' type="text" />
          <button>Search</button>
        </form>
        <SelectTypes setSelectValue={setSelectValue}/>
        <div className='pokedex'>
            {
              pokemons?.results.map(pokemon => (
                <PokeCard
                key={pokemon.url}
                pokemon={pokemon}
                />
              ))
            }
        </div>
    </div>
  )
}

export default Pokedex