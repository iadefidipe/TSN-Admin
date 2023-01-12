import { createSlice } from "@reduxjs/toolkit"
import { userData } from "@/shared/data/profile"

const user =
  typeof window !== "undefined" && JSON.parse(localStorage.getItem("user"))

const initialState = {
  user:{}
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
})
export const { setUser } = userSlice.actions
export default userSlice.reducer
