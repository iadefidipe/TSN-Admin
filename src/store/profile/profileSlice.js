import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createModal: false,
  createInfoCurrentStep: 0,
  createInfoCurrentStepCompany: 0,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setCreateModal: (state, payload) => {
      state.createModal = payload.payload;
    },
    setIncreaseCreateInfoCurrentStep: (state) => {
      state.createInfoCurrentStep = state.createInfoCurrentStep + 1;
    },
    setDecreaseCreateInfoCurrentStep: (state) => {
      state.createInfoCurrentStep = state.createInfoCurrentStep - 1;
    },
    setIncreaseCreateInfoCurrentStepCompany: (state) => {
      state.createInfoCurrentStepCompany =
        state.createInfoCurrentStepCompany + 1;
    },
    setDecreaseCreateInfoCurrentStepCompany: (state) => {
      state.createInfoCurrentStepCompany =
        state.createInfoCurrentStepCompany - 1;
    },
  },
});

export const {
  setCreateModal,
  setIncreaseCreateInfoCurrentStep,
  setDecreaseCreateInfoCurrentStep,
  setIncreaseCreateInfoCurrentStepCompany,
  setDecreaseCreateInfoCurrentStepCompany,
} = profileSlice.actions;

export default profileSlice.reducer;
