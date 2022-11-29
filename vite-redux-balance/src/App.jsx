import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";

import Example from "./pages/Example";
import ExampleDetail from "./pages/ExampleDetail";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/example_detail" element={<ExampleDetail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
