import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../features/slice/AddNoteSlice";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleNote = (e) => {
    e.preventDefault();

    if ((title !== "") & (description !== "")) {
      const newNotes = {
        id: Date.now().toString(32),
        title: title,
        description: description,
        createAt: new Date().toString(),
      };
      dispatch(addNotes(newNotes));
      setTitle("");
      setDescription("");

      toast.success("Successfully added note", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Please fill up input field", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className=" h-screen flex justify-center items-center">
        <div className=" bg-slate-200 p-5 rounded">
          <h2 className=" text-2xl font-bold font-mono text-center mb-3">
            Add to Note
          </h2>
          <form className=" flex flex-col gap-2 w-[500px]">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" py-2 px-3 shadow appearance-none border text-gray-700 focus:outline-none rounded w-full leading-tight"
            />
            <textarea
              value={description}
              maxLength={40}
              rows={4}
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
              className=" shadow p-2 resize-none rounded outline-none text-gray-700 focus:outline-none"
            ></textarea>
            <div className=" text-center mt-2 font-bold">
              <button
                onClick={handleNote}
                className=" bg-slate-800 py-2 px-4 rounded text-white"
              >
                Add Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
