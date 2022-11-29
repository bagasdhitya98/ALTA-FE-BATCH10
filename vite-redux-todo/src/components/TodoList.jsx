import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => {
    return state.tasks;
  });

  console.log("todos :", todos);

  return (
    <ul>
      {todos.length !== 0 ? (
        todos.map((todo) => {
          return <TodoItem id={todo.id} title={todo.name} />;
        })
      ) : (
        <></>
      )}
    </ul>
  );
};

export default TodoList;
