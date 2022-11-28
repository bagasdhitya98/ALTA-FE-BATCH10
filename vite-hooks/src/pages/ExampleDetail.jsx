import React from "react";
import { useCountContext } from "../context/context";

const ExampleDetail = () => {
  const { toggle } = useCountContext();
  return (
    <div
      className={`w-screen h-screen ${
        toggle ? `bg-alta-orange` : `bg-alta-space-cadet`
      }`}
    >
      <div className="mx-20">
        <h1 className="text-white">Color Changed!</h1>
      </div>
    </div>
  );
};

export default ExampleDetail;
