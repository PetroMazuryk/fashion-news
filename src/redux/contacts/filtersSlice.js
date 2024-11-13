import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilterValue } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
