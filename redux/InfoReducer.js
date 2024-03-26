import { createSlice } from "@reduxjs/toolkit";

export const InfoSlice = createSlice({
  name: "info",
  initialState: {
    isAvailable: true,
  },
  reducers: {
    setAvailability: (state, action) => {
      state.isAvailable = action.payload;
    },
  },
});

export const { setAvailability } = InfoSlice.actions;

export default InfoSlice.reducer;
