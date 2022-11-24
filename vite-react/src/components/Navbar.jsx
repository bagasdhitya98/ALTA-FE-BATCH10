import React, { Component } from "react";

class Navbar extends Component {
  render() {
    const { title, home, about, contact } = this.props;
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
        </div>
      </div>
    );
  }
}

export default Navbar;
