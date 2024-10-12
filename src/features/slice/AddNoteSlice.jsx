import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const saveNotes = JSON.parse(localStorage.getItem("note"));
if (saveNotes) {
  initialState.notes = saveNotes;
}

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      state.notes = [...state.notes, action.payload];
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("note", JSON.stringify(state.notes));
    },
    updateNotes: (state, action) => {
      const { id, title, description, createAt } = action.payload;
      const note = state.notes.find((note) => note.id === id);
      if (note) {
        note.id = id;
        note.title = title;
        note.description = description;
        note.createAt = createAt;
      }
    },
  },
});
export const { addNotes, deleteNote, updateNotes } = noteSlice.actions;
export default noteSlice.reducer;
