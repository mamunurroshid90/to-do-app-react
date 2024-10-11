import { formatDistance } from "date-fns";
import React from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/slice/AddNoteSlice";

const Notes = () => {
  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();
  // console.log(notes);

  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <div className=" container max-w-screen-xl grid grid-cols-3 gap-4 mt-5">
        {notes?.map((note) => (
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
              <button className=" bg-slate-800 py-1 px-4 rounded text-white font-bold">
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notes;
