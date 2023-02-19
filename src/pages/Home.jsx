import React from 'react'
import { setNameTrainer } from '../store/slices/trainerName.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setNameTrainer(e.target.name.value.trim()))
    //Para vaciar el input cuando se hace submit
    e.target.name.value = ''
    navigate('/pokedex')//es una funcio que navega a la ruta que se le pase por parametro
  }

  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer</h2>
        <p>Give me your name to start</p>
        <form onSubmit={handleSubmit}>
            <input id='name' type="text" />
            <button>Start</button>
        </form>
    </div>
  )
}

export default Home