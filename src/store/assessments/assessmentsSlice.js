import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFilter: "All Assessments",
  openQuestions: false,
  openPassed: false,
  currentQuestionIndex: 0,
};

export const assessmentsSlice = createSlice({
  name: "assessments",
  initialState,
  reducers: {
    updateFilter: (state, payload) => {
      state.currentFilter = payload.payload;
    },
    openQuestion: (state) => {
      state.openQuestions = true;
    },
    closeQuestion: (state) => {
      state.openQuestions = false;
    },
    openPassed: (state) => {
      state.openPassed = true;
    },
    closePassed: (state) => {
      state.openPassed = false;
    },
    updateCurrentQuestionIndex: (state, payload) => {
      state.currentQuestionIndex = payload.payload;
    },
  },
});

export const {
  updateFilter,
  openQuestion,
  closeQuestion,
  updateCurrentQuestionIndex,
  openPassed,
  closePassed,
} = assessmentsSlice.actions;

export default assessmentsSlice.reducer;
