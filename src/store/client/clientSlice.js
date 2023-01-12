import { createSlice } from "@reduxjs/toolkit"

const initialState = 0

export const clientSlice = createSlice({
  name: "client Id",
  initialState,
  reducers: {
    getClient: (state, action) => {
      state = action.payload
    },
  },
})

export const { getClient } = clientSlice.actions

export default clientSlice.reducer
