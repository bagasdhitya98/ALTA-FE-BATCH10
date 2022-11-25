import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import { useCookies } from "react-cookie";

const App = () => {
  const [cookies, setCookie] = useCookies();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
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
