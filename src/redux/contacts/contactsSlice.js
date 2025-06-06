import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFashionNews,
  addFashionNews,
  deleteFashionNews,
  editFashionNews,
  updateNewsFavorite,
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
        state.items = state.items.filter(
          item => item._id !== action.payload._id
        );
      })
      .addCase(deleteFashionNews.rejected, handleRejected)
      .addCase(editFashionNews.pending, handlePending)
      .addCase(editFashionNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(item =>
          item._id === action.payload._id ? action.payload : item
        );
      })
      .addCase(editFashionNews.rejected, handleRejected)
      .addCase(updateNewsFavorite.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateNewsFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => item._id === payload._id);
        if (index !== -1) {
          state.items[index] = payload;
        }
      })
      .addCase(updateNewsFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
