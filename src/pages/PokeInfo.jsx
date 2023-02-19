import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokeInfo = () => {

  const [hasError, setHasError] = useState()
  const { id } = useParams()

  const [poke, setPoke] = useState()

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

  if(hasError) {
    return <h1>❌The pokemon with name "{id} not found"❌</h1>
  }else{
    return (
      <div>
        <img src={poke?.sprites.other['official-artwork'].front_default} alt="" />
        <h1>{poke?.name}</h1>
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