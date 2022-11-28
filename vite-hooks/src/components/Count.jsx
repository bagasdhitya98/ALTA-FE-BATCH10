import React from "react";

const Count = ({ count }) => {
  return (
    <>
      <div className="flex-col">
        <h1 className="text-white">{count}</h1>
        <button className="btn btn-secondary">-</button>
        <button className="btn btn-secondary">Reset</button>
        <button className="btn btn-secondary">+</button>
      </div>
    </>
  );
};

export default Count;
