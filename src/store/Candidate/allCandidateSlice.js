import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  candidates: []
}

export const allCandidateSlice = createSlice({
  name: "allCandidates",
  initialState,
  reducers: {
    setAllCandidates: (state, action) => {
      state.candidates = action.payload
    },
  },
})

export const { setAllCandidates } = allCandidateSlice.actions

export default allCandidateSlice.reducer
