import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Pokedex/Header';
import Pagination from '../Components/Pokedex/Pagination';
import PokeCard from '../Components/Pokedex/PokeCard';
import SelectTypes from '../Components/SelectTypes';

const Pokedex = () => {

  const { nameTrainer } = useSelector(state => state)
  const [pokemons, setPokemons] = useState()
  const [selectValue, setSelectValue] = useState('allpokemons')

  useEffect(() => {
    if(selectValue === 'allpokemons') {
      const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0'
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
  
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(10)
  const initialPoke =  (page - 1) * pokePerPage
  const finalPoke = page * pokePerPage
  const maxPage = pokemons && Math.ceil(pokemons.results.length / pokePerPage)
  

  return (
    <div>
        <section className='conteiner-component'>
          <Header
          selectValue={selectValue}
          pokemons={pokemons}
          />
        </section>
        
        <div className='pokedex'>
          <h1 className='pokedex-greeting'><span className='pokedex-greeting__label'>Hi {nameTrainer} </span>here find your favorite pokemon</h1>
          <div className='pokedex-form__container'>
            <form className='pokedex-form' onSubmit={handleSubmit}>
              <input className='pokedex-form__input' id='pokemon' type="text" placeholder='Type name any pokemon'/>
              <button button className='pokedex-form__button'>Search</button>
            </form>
          <SelectTypes
            setSelectValue={setSelectValue}
            setPage={setPage}
          />
          

        </div>
            {
              pokemons?.results.slice(initialPoke, finalPoke).map(pokemon => (
                <PokeCard
                key={pokemon.url}
                pokemon={pokemon}
                />
              ))
            }
        </div>
        <div className='pagination__container'>
          <Pagination
          page={page}
          maxPage={maxPage}
          setPage={setPage}
        />
        </div>
        
    </div>
  )
}

export default Pokedex