import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImagesThunk } from '../../store/slices/imgHeader.slice'
import './styles/header.css'


const Header = () => {
    
    const dispatch = useDispatch()
    const { images } = useSelector(state => state)
    
    useEffect(() => {
        dispatch(getImagesThunk('lapras'))
    }, [])
    
    
    return (
        <header className='header-container-img'>
          <img src={images.sprites?.other['official-artwork'].front_default} alt="" />    
          <img src={images.sprites?.other['official-artwork'].front_shiny} alt="" />   
          <img src={images.sprites?.other['home'].front_default} alt="" />   
          <img src={images.sprites?.other['dream_world'].front_default} alt="" />   
        </header>
        
      )
    }
    
    export default Header

//https://pokeapi.co/api/v2/pokemon?limit=11&offset=0