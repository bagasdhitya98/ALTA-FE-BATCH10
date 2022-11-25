import React from "react";

const Navbar = ({ onClickHome, onClickAbout, onClickContact }) => {
  return (
    <div className="navbar bg-white shadow-md sticky z-10 top-0">
      <div className="flex-1 ml-7">
        <img
          src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
          width={110}
          height={110}
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="text-alta-space-cadet">
            <a href={onClickHome}>Home</a>
          </li>
          <li className="text-alta-space-cadet">
            <a href={onClickAbout}>About</a>
          </li>
          <li className="text-alta-space-cadet">
            <a href={onClickContact}>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
        >
          <li className="text-alta-space-cadet">
            <a className="justify-between">
              Profile
              <span className="badge bg-alta-orange text-white">New</span>
            </a>
          </li>
          <li className="text-alta-space-cadet">
            <a>Settings</a>
          </li>
          <li className="text-alta-space-cadet">
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
