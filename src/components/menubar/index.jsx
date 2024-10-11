import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" bg-slate-200 py-2">
        <div className="container max-w-screen-xl flex justify-between items-center">
          <div>
            <Link to="/">
              <img
                src="/simplenote-color.svg"
                alt="logo"
                className=" w-10 h-10"
              />
            </Link>
          </div>
          <div>
            <ul className=" flex items-center gap-5">
              <li className=" text-lg font-semibold font-sans">
                <Link to="/">Home</Link>
              </li>
              <li className=" text-lg font-semibold font-sans">
                <Link to="/notes">Notes</Link>
              </li>
              <li className=" text-lg font-semibold font-sans">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
