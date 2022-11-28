import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import Example from "./pages/Example";
import NotFound from "./pages/NotFound";
import ExampleDetail from "./pages/ExampleDetail";

import { CountProvider } from "./context/context.jsx";

const App = () => {
  return (
    <CountProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/example" element={<Example />} />
          <Route path="/example_detail" element={<ExampleDetail />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CountProvider>
  );
};

export default App;

//----FUNCTIONAL COMPONENT----//

// const App = () => {

//   const [name, setName] = useState()
//   setName("john doe")

//   return (
//<div></div>
//   );
// };

// export default App;

// //----CLASS COMPONENT----//

// import React, { Component } from 'react';

// state={
//   name:""
// }

// this.setState({name: "john doe"})

//  class App extends Component {
//   render() {
//     return (
//       <div> textInComponent </div>
//     );
//   }
// }

// export default App
