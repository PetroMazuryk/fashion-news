import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFashionNews = createAsyncThunk(
  'contacts/fetchFashionNews',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/news');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFashionNews = createAsyncThunk(
  'contacts/addFashionNews',
  async ({ title, date, content }, thunkAPI) => {
    try {
      const response = await axios.post('/news', {
        title,
        date,
        content,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFashionNews = createAsyncThunk(
  'contacts/deleteFashionNews',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/news/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editFashionNews = createAsyncThunk(
  'contacts/editFashionNews',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.patch(`/news/${contactId._id}`, {
        title: contactId.title,
        date: contactId.date,
        content: contactId.content,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateNewsFavorite = createAsyncThunk(
  'contacts/updateFavorite',
  async ({ id, favorite }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`/news/${id}/favorite`, {
        favorite,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
