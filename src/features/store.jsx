import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./slice/AddNoteSlice";

const store = configureStore({
  reducer: {
    note: noteSlice,
  },
});
export default store;
