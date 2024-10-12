import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNotes } from "../../features/slice/AddNoteSlice";

const UpdateNotes = ({
  setVisibleUpdate,
  editTitle,
  setEditTitle,
  editDescription,
  setEditDescription,
  editId,
  setEditId,
}) => {
  const dispatch = useDispatch();

  const editUpdateNote = (e) => {
    e.preventDefault();
    const updateNewNotes = {
      id: editId,
      title: editTitle,
      description: editDescription,
      createAt: new Date().toString(),
    };
    dispatch(updateNotes(updateNewNotes));
    setVisibleUpdate(false);
  };
  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className=" bg-slate-200 p-5 rounded relative">
          <h2 className=" text-2xl font-bold font-mono text-center mb-3">
            Update Notes
          </h2>
          <button
            onClick={() => setVisibleUpdate(false)}
            className=" absolute top-2 right-2 text-xl font-bold text-white w-8 h-8 bg-slate-400 rounded-full flex justify-center items-center"
          >
            <RxCross2 />
          </button>
          <form className=" flex flex-col gap-2 w-[500px]">
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              type="text"
              required
              className=" py-2 px-3 shadow appearance-none border text-gray-700 focus:outline-none rounded w-full leading-tight"
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              required
              maxLength={80}
              rows={4}
              className=" shadow p-2 resize-none rounded outline-none text-gray-700 focus:outline-none"
            ></textarea>
            <div className=" text-center mt-2 font-bold">
              <button
                onClick={editUpdateNote}
                className=" bg-slate-800 py-2 px-4 rounded text-white"
              >
                Update Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateNotes;
