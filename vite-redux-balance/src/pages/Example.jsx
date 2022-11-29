import React from "react";

const Example = () => {
  return (
    <div className="w-screen h-screen bg-alta-space-cadet">
      <div className="flex justify-center">
        <p className="font-semibold mt-20 text-3xl">
          Let's learning Redux + Redux Toolkit
        </p>
      </div>
      <div className="flex justify-center mt-20">
        <h1 className="font-semibold">$0</h1>
      </div>
      <div className="flex justify-center mt-20">
        <button className="btn bg-alta-orange text-white mx-10">
          Deposit $10
        </button>
        <button className="btn bg-alta-orange text-white">Withdraw $10</button>
      </div>
    </div>
  );
};

export default Example;
