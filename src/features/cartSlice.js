import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        add : (state,action) => {
            console.log(current(state))
            state.items.push(action.payload);
        },
        remove : (state,action) => {
            console.log(action.payload)
            const newState = {...state, "items":state.items.filter((item)=>item.id!==action.payload)}
            console.log(newState)
            return newState;
        },
        clear : (state) => {
            state.items.length = 0;
        }
    }
})

export default cartSlice.reducer;
export const {add, remove, clear} = cartSlice.actions;