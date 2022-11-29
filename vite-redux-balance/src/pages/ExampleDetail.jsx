import React from "react";
import { useSelector } from "react-redux";

const ExampleDetail = () => {
  const balance = useSelector((state) => state.balance);

  return (
    <div className={`w-screen h-screen ${balance.toggle}`}>
      <div></div>
    </div>
  );
};

export default ExampleDetail;
