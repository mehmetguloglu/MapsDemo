import {createSlice} from '@reduxjs/toolkit';

const mapsReducer = createSlice({
  name: 'mapsReducer',
  initialState: {
    locations: [],
  },
  reducers: {
    setLocations(state, action) {
      state.locations = action.payload;
    },
  },
});

export const {setLocations} = mapsReducer.actions;
export default mapsReducer.reducer;
