import React from "react";
import { useCountContext } from "../context/context.jsx";
import { useNavigate } from "react-router-dom";

const CountContainer = ({ children }) => {
  const navigate = useNavigate();
  const { toggle, handleTheme } = useCountContext();

  return (
    <>
      <div
        className={`px-10 ${
          toggle ? `bg-alta-orange` : `bg-alta-space-cadet`
        } w-screen h-screen`}
      >
        {children}
        <button className="btn btn-primary" onClick={() => handleTheme()}>
          {" "}
          Change Theme{" "}
        </button>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/example_detail")}
        >
          {" "}
          Going to Example Detail{" "}
        </button>
      </div>
    </>
  );
};

export default CountContainer;
