import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  candidate:{}
};

export const currentCandidateSlice = createSlice({
  name: "current Candidate",
  initialState,
  reducers: {
    setCurrentCanditate: (state, action) => {
      state.candidate = action.payload;
    },
  },
});

export const {
    setCurrentCanditate
} = currentCandidateSlice.actions;

export default currentCandidateSlice.reducer;
