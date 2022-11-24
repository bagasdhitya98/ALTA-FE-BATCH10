import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { title, home, about, contact, profile } = this.props;
    return (
      <div className="navbar bg-white shadow-md sticky z-10 top-0">
        <div className="flex-1 ml-7">
          <img
            src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
            width={90}
            height={90}
          />
          <a className="text-black ml-10 font-semibold">{title}</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a className="text-black" onClick={home}>
                Home
              </a>
            </li>
            <li>
              <a className="text-black" onClick={about}>
                About
              </a>
            </li>
            <li>
              <a className="text-black" onClick={contact}>
                Contact Us
              </a>
            </li>
          </ul>
          <p className="text-black font-bold">{profile}</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
