import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFashionNews,
  addFashionNews,
  deleteFashionNews,
  editFashionNews,
} from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchFashionNews.pending, handlePending)
      .addCase(fetchFashionNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchFashionNews.rejected, handleRejected)
      .addCase(addFashionNews.pending, handlePending)
      .addCase(addFashionNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addFashionNews.rejected, handleRejected)
      .addCase(deleteFashionNews.pending, handlePending)
      .addCase(deleteFashionNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteFashionNews.rejected, handleRejected)
      .addCase(editFashionNews.pending, handlePending)
      .addCase(editFashionNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(editFashionNews.rejected, handleRejected),
});

export const contactsReducer = contactsSlice.reducer;
