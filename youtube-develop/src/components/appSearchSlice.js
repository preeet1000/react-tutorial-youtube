import { createSlice } from "@reduxjs/toolkit";

const appSearchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      //state = { ...state, ...action.payload };
      state= Object.assign(state, action.payload);
    },
  },
});

export const {cacheResults} =  appSearchSlice.actions;
export default appSearchSlice.reducer;
