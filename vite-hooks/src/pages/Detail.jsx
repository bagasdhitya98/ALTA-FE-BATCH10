import React from "react";
import { useLocation } from "react-router-dom";

import Container from "../components/Container";

const Detail = () => {
  const location = useLocation();

  const item = location?.state?.item;

  return (
    <Container>
      <div className="m-20">
        <h1 className="text-black">{item.title}</h1>
        <p className="text-black">{item.description}</p>
      </div>
    </Container>
  );
};

export default Detail;
