import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gradients from '../json/gradients.json'

const PokeInfo = () => {

  const [hasError, setHasError] = useState()
  const { id } = useParams()

  const [poke, setPoke] = useState()
  const [backGroundColor, setBackGroundStyles] = useState()
  const [typeColor, setTypeColor] = useState()

  useEffect(() => {
    setBackGroundStyles(gradients[0][`${poke?.types[0].type.name}`])
    setTypeColor(gradients[1][`${poke?.types[0].type.name}`])
  }, [poke])

  useEffect(() => {
   const URL = `https://pokeapi.co/api/v2/pokemon/${id}`
   axios.get(URL)
     .then(res => {
      setPoke(res.data)
      setHasError(false)
     })
     .catch(err => {
      setHasError(true)
      console.log(err)
     }) 
  }, [id])

  console.log(poke?.types[0].type.name)

  if(hasError) {
    return <h1>❌The pokemon with name "{id} not found"❌</h1>
  }else{
    return (
      <div className='poke-info'>
        
        {/* <header className='poke-info__header'> */}
          
          <div className='poke-info-circle'>
            <div className='poke-info-inner-circle'></div>
          </div>

        <section className='poke-info__header-section'>
          <div className='poke-info__block-red'>
            <img className='poke-info__image-header' src="/images/pokedex-img-home.png" alt="" />
          </div>
          <div className='poke-info__block-black'></div>
        </section>
        
        
          

        {/* </header> */}

        <section className='poke-info__card'>
          <div className='poke-info__image-container' style={{backgroundImage: backGroundColor}}>
            <img className='poke-info__image' src={poke?.sprites.other['official-artwork'].front_default} alt="" />  
          </div>
          <div className='poke-info__id'>#{id}</div>
          <hr />
          <h1 className='poke-info__name' style={{color: typeColor}}>{poke?.name}</h1>

          <ul className='poke-info__phy-params'>            
            <li className='poke-info__param-label'>Weight<span className='poke-info__param-value'>{poke?.weight}</span></li>
            <li className='poke-info__param-label'>Height<span className='poke-info__param-value'>{poke?.height}</span></li>
          </ul>

          <hr/>

          <div className='poke-info__types-abilities'>

          <div className='poke-info__types-container'>
          <h3 className='poke-info__type-title'><span>Type</span></h3>
          <ul className='poke-info__type-list'>
              {
                poke?.types.map(type => (
                  <li className='poke-info__type-element' key={type.type.url} style={{backgroundColor: typeColor}}>{type.type.name}</li>
                  ))
                }
          </ul>
          </div>        

          <div className='poke-info__abilities-container'>      
          <h3 className='poke-info__abilities-title'><span>Abilities</span></h3>
          <ul className='poke-info__abilities-list'>
            {
              poke?.abilities.map(ability => (
                <li className='poke-info__abilities-element' key={ability.ability.url}>{ability.ability.name}</li>
              )) 
            }
          </ul>
          </div>

          </div>    
          <section className='poke-info__stats-container'>
            <h2 className='poke-info__stats-title'>Stats<hr /></h2>
            <ul className='poke-info__stats-list'>
              {
                poke?.stats.map(stat => (
                  <li key={stat.stat.url} className='poke-info__stats-element'>
                    <div key={stat.stat.url} className='content-stat'><span className='stats__name'>{stat.stat.name}</span>{stat.base_stat} </div>
                    <div className='bar-stat'>
                      <div  style={{
                        width: `${stat.base_stat}%`,
                        background: 'linear-gradient(90deg, #FCD676 -2.25%, #E6901E 133.18%)'
                      }} key={stat.stat.url} className='bar-progress'></div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>

        </section>
          
            <footer className='poke-info__container'>
              <h2 className='poke-info__movements-title'>Movements<hr /></h2>
              <ul className='poke-info__movements-list'>
                {
                  poke?.moves.map(move => (
                    <li key={move.move.url} className='poke-info__movements-element'>{move.move.name}</li>
                  ))
                }
              </ul>
            </footer>
            
      </div>
    )
  }
  
  return (
    <div>
        
        <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        <h1>{poke?.name}</h1>
    </div>
  )
}

export default PokeInfo