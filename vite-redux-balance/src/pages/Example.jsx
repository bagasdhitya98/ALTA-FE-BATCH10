import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw, theme } from "../features/balanceSlice";

const Example = () => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  return (
    <div className={`w-screen h-screen ${balance.toggle}`}>
      <button onClick={() => dispatch(theme())}>Change Theme</button>
      <div className="flex justify-center">
        <p className="font-semibold mt-20 text-3xl">
          Let's learning Redux + Redux Toolkit
        </p>
      </div>
      <div className="flex justify-center mt-20">
        <h1 className="font-semibold">$ {balance.total}</h1>
      </div>
      <div className="flex justify-center mt-20">
        <button
          className={`btn ${
            balance.toggle === `bg-alta-space-cadet`
              ? `bg-alta-orange`
              : `bg-alta-space-cadet`
          } text-white mx-10`}
          onClick={() => dispatch(deposit(10))}
        >
          Deposit $10
        </button>
        <button
          className={`btn ${
            balance.toggle === `bg-alta-space-cadet`
              ? `bg-alta-orange`
              : `bg-alta-space-cadet`
          } text-white`}
          onClick={() => dispatch(withdraw(10))}
        >
          Withdraw $10
        </button>
      </div>
    </div>
  );
};

export default Example;
