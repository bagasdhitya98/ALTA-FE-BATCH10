import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  return (
    <div className="w-screen h-screen bg-alta-space-cadet">
      <div className="flex justify-center">
        <AddTodo />
      </div>
      <div className="flex justify-center">
        <TodoList />
      </div>
    </div>
  );
};

export default TodoPage;
