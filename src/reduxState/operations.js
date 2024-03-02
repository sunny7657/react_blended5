import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    const persistedBaseCurrency = state.currency.baseCurrency;

    if (persistedBaseCurrency) {
      return thunkApi.rejectWithValue('We already have base currancy');
    }

    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
