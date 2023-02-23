import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import nameTrainer from './trainerName.slice'

const imagesHeaderSlice = createSlice({
    name: 'images',
    initialState: 'null',
    reducers : {
        setImages: (state, action) => action.payload
    }
})

export const { setImages } = imagesHeaderSlice.actions

export default imagesHeaderSlice.reducer

export const getImagesThunk = (name) => (dispatch) => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
      .then(res => dispatch(setImages(res.data)))
      .catch(err => console.log(err))
}