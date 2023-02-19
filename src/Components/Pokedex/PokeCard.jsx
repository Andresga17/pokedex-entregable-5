import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gradients from '../../json/gradients.json'

const PokeCard = ({pokemon}) => {
  
  const [poke, setPoke] = useState()
  const [backGroundStyles, setBackGroundStyles] = useState()
  const [borderColor, setBorderColor] = useState()
  

  useEffect(() => {
    axios.get(pokemon.url)
      .then(res => {
        setPoke(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    setBackGroundStyles(gradients[0][`${poke?.types[0].type.name}`])
    setBorderColor(gradients[1][`${poke?.types[0].type.name}`])
  }, [poke])

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/pokedex/${poke.id}`)
  }

  return (
    <article onClick={handleClick} className='poke-card' style={{borderColor: borderColor}}>
      <header className='poke-card__header' style={{backgroundImage: backGroundStyles}}>
        <img className='poke-card__img' src={poke?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className=''></section>
      <body className='poke-card__body'>
        <h2 className='poke-card__name' style={{color: borderColor}}>{poke?.name}</h2>
        <ul className='poke-card__types-container'>
          {
            poke?.types.map(type => (
                <li className='poke-card__type' key={type.type.name}>{type.type.name}</li>
            ))
          }
        </ul>
      </body>
      <footer className='poke-card__footer'>
        <ul className='poke-card__stats-container'>
          {
            poke?.stats.map(stat => (
                <li className='poke-card__stat' key={stat.stat.url}>
                    <span className='poke-card__stat-label'>{stat.stat.name}</span>
                    <span className='poke-card__stat-value' style={{color: borderColor}}>{stat.base_stat}</span>
                </li>
            ))
          }
        </ul>
      </footer>  
    </article>
  )
}

export default PokeCard