import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit uses the Immer library internally. 
      // This means you can write "mutating" code safely here.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      // action.payload contains the data passed when dispatching
      state.value += action.payload;
    },
  },
});

// Export the generated action creators for use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer to register it in the store
export default counterSlice.reducer;
