import { createSlice } from '@reduxjs/toolkit'

export const couter=createSlice({
  name: 'incdec',
  initialState:10,
  reducers:{
    INC:(state,action)=>{
      return state += action.payload;
    },
    DEC:(state,action)=>{
     return state -= action.payload;
    },
    

  }
})
export const{INC, DEC} =couter.actions;
export default couter.reducer;