import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

import TodoPage from "./pages/TodoPage";
import TodoDetail from "./pages/TodoDetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/todo_detail" element={<TodoDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
