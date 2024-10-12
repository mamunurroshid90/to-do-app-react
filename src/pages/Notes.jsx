import { formatDistance } from "date-fns";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/slice/AddNoteSlice";
import UpdateNotes from "../components/menubar/UpdateNotes";

const Notes = () => {
  const initialNotesShow = 6;
  const [nextNote, setNextNote] = useState(initialNotesShow);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editId, setEditId] = useState("");
  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const handleUpdate = (note) => {
    setVisibleUpdate(true);
    setEditTitle(note.title);
    setEditDescription(note.description);
    setEditId(note.id);
  };

  if (visibleUpdate) {
    return (
      <UpdateNotes
        setVisibleUpdate={setVisibleUpdate}
        editTitle={editTitle}
        setEditTitle={setEditTitle}
        editDescription={editDescription}
        setEditDescription={setEditDescription}
        editId={editId}
        setEditId={setEditId}
      />
    );
  }

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  const LoadMore = () => {
    setNextNote((prev) => prev + 3);
  };

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <div className=" container max-w-screen-xl grid grid-cols-3 gap-4 mt-5">
        {notes?.slice(0, nextNote).map((note) => (
          <div key={note.id} className=" bg-slate-200 p-5 rounded">
            <h2 className=" text-2xl font-serif font-bold capitalize">
              {note.title}
            </h2>
            <p className=" text-base font-mono">{note.description}</p>
            <p className=" font-thin text-xs">
              {formatDistance(note.createAt, new Date(), { addSuffix: true })}
            </p>
            <div className=" flex justify-end gap-3 mt-3">
              <button
                onClick={() => handleDelete(note.id)}
                className=" bg-red-800 py-1 px-4 rounded text-white font-bold"
              >
                Delete
              </button>
              <button
                onClick={() => handleUpdate(note)}
                className=" bg-slate-800 py-1 px-4 rounded text-white font-bold"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className=" text-center mt-8">
        {notes.length > nextNote && (
          <button
            onClick={LoadMore}
            className=" bg-slate-800 py-1 px-4 rounded text-white font-bold"
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
};

export default Notes;
