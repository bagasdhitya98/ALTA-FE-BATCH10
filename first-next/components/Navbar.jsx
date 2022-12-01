import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md">
      <div className="flex-1 ml-10">
        <img
          src={
            "https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
          }
          width={90}
          height={90}
        />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li className="text-alta-space-cadet">
            <a>About</a>
          </li>
          <li className="text-alta-space-cadet">
            <a>Our Services</a>
          </li>
          <li className="text-alta-space-cadet">
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
