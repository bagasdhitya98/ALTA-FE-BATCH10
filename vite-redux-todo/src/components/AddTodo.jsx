import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addTask } from "../features/taskSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    // event.preventDefault();
    if (value.trim().length === 0) {
      alert("Enter a task before adding!");
      setValue("");
      return;
    }
    dispatch(addTask({ task: value }));
    setValue("");
  };

  return (
    <div>
      <input
        className="input w-60 max-w-xs bg-white mx-10 mt-60 text-black"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <button
        className="btn bg-alta-orange text-white"
        onClick={() => onSubmit()}
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;
