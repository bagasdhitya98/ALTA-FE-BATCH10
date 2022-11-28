import React from "react";
import { useCountContext } from "../context/context";

const Count = () => {
  const { count, handleCount } = useCountContext();

  return (
    <>
      <div className="flex-col">
        <h1 className="text-white">{count}</h1>
        <button className="btn btn-secondary" onClick={() => handleCount(-1)}>
          -
        </button>
        <button className="btn btn-secondary" onClick={() => handleCount(0)}>
          Reset
        </button>
        <button className="btn btn-secondary" onClick={() => handleCount(1)}>
          +
        </button>
      </div>
    </>
  );
};

export default Count;
