import { createSlice } from '@reduxjs/toolkit'





const initialState = {



    currentUser: {},
    darkMode: false,
    steps: [],




}





export const counterSlice = createSlice({



    name: 'counter',

    initialState,


    reducers: {


        switchMode: (state, action) => {
            state.darkMode = !state.darkMode
        },

        login: (state, action) => {
            state.currentUser = action.payload
        },


        logout: (state, action) => {
            state.currentUser = {}
            state.chat = []
        },

        addTodo: (state, action) => {
            state.steps?.push(action.payload)
        },






    },


})







export const { switchMode, login, logout, addTodo } = counterSlice.actions

export default counterSlice.reducer