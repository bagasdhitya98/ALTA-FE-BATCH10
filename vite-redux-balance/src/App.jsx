import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./pages/Example";
import ExampleDetail from "./pages/ExampleDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Example />} />
        <Route path="/example_detail" element={<ExampleDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
