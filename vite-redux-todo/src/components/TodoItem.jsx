import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/taskSlice";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <div className="w-96 h-20 bg-alta-orange flex flex-row rounded-md">
      <p className="font-semibold text-white mt-5 ml-5">{title}</p>
      <button
        className="bg-alta-space-cadet text-white w-25 h-10 ml-40 mt-5"
        onClick={() => removeTask()}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
