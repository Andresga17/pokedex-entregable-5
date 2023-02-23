import {configureStore} from "@reduxjs/toolkit";
import nameTrainer from './slices/trainerName.slice'
import images from './slices/imgHeader.slice'

const store = configureStore({
    reducer: {
        nameTrainer,
        images
    }
})

export default store