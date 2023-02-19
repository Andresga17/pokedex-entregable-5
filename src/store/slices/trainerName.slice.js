import { createSlice } from "@reduxjs/toolkit"

const nameTrainerSlice = createSlice({
    name: 'nameTrainer',
    initialState: '',
    reducers: {
        //El state es el valor actual del estado
        //esta es la accion para cambiar el estado
        setNameTrainer: (state, action) => action.payload 
    }
})

export const { setNameTrainer } = nameTrainerSlice.actions

export default nameTrainerSlice.reducer