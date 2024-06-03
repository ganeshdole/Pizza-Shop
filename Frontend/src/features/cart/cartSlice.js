import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addItem: (state,payload) => {
      console.log(payload)
      state.items.push({payload, quantity : 1});
    },
    updateQunitity : (state, payload)=>{
      console.log(payload)
    },
    removeItem: (state, payload) => {

    },
  },
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer;