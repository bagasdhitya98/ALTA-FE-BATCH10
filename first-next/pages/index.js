import React from "react";
import Head from "next/head";
import Router from "next/router";

import Navbar from "../components/Navbar";

const App = () => {
  const nextPage = () => {
    Router.push({
      pathname: `/contact/contact`,
    });
  };

  return (
    <div className="w-screen h-screen bg-white">
      <Head>
        <title>Alta Next</title>
        <link
          rel="icon"
          href="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
        />
      </Head>
      <Navbar />
      <div className="p-10">
        <button
          className="btn btn-alta-orange text-white"
          onClick={() => nextPage()}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default App;
