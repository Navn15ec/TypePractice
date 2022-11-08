import {createSlice, PayloadAction }  from "@reduxjs/toolkit"


type InitialState = {
    numOfCakes : number
}

const initialState : InitialState = {
    numOfCakes : 10
}

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers : {
        Ordered : (state)=>{
            state.numOfCakes -= 1;
        },
        Restocked : (state, action:PayloadAction<number>)=>{
            state.numOfCakes += action.payload
        }
    }

})

export default cakeSlice.reducer
export const {Ordered, Restocked}= cakeSlice.actions