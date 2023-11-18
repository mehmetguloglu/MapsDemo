import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import ILocation from '../types/ILocation';

interface IMapReducer {
  locations: ILocation[];
}

const mapsReducer = createSlice({
  name: 'mapsReducer',
  initialState: {
    locations: [],
  } as IMapReducer,
  reducers: {
    setLocations(state, action: PayloadAction<ILocation[]>) {
      state.locations = action.payload;
    },
  },
});

export const {setLocations} = mapsReducer.actions;
export default mapsReducer.reducer;
