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
    <div className='home'>
      <section className='home__container-info'>
        <img className='home__image-title' src="../../public/images/pokedex-img.svg" alt="" />
        <h2 className='homer__greeting'>Hi Trainer!</h2>
        <form className='home__form' onSubmit={handleSubmit}>
            <input className='home__input' placeholder='give me your name to start' id='name' type="text" />
            <button className='home__button'>Start</button>
        </form>
      </section>  
          <div className='home__footer-circle'>
            <div className='home__footer-inner-circle'></div>
          </div>
        <footer className='home__footer'>
          <div className='home__footer-block-red'></div>
          <div className='home__footer-block-black'></div>
        </footer>
    </div>
  )
}

export default Home