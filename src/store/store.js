import sidebar from "./sidebar/sidebarSlice"
import user from "./user/userSlice"
import assessments from "./assessments/assessmentsSlice"
import profile from "./profile/profileSlice"
import {
  allCandidateSliceReducer,
  currentCandidateSliceReducer,
} from "./Candidate"
import { clientSliceReducer } from "./client"

import { configureStore } from "@reduxjs/toolkit"

// export let store = null;

export const store = configureStore({
  reducer: {
    user,
    sidebar,
    assessments,
    profile,
    allCandidates: allCandidateSliceReducer,
    currentCandidate: currentCandidateSliceReducer,
    clientID: clientSliceReducer,
  },
})

// export default function getStore(incomingPreloadState) {
//   store = configureStore({
//     reducer: {
//       user,
//       sidebar,
//       assessments,
//       profile,
//     },
//     // preloadedState: incomingPreloadState,
//   });
//   return store;
// }
