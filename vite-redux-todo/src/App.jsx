import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import TodoDetail from "./pages/TodoDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/todo_detail" element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
