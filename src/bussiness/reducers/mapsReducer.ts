import {createSlice} from '@reduxjs/toolkit';
import {LatLng} from 'react-native-maps';

interface IMapReducer {
  locations: {name: string; coordinate: LatLng; color: string}[];
}

const mapsReducer = createSlice({
  name: 'mapsReducer',
  initialState: {
    locations: [],
  } as IMapReducer,
  reducers: {
    setLocations(state, action) {
      state.locations = action.payload;
    },
  },
});

export const {setLocations} = mapsReducer.actions;
export default mapsReducer.reducer;
