import React from "react";

const Category = ({ onClick, title }) => {
  return (
    <button
      className="w-20 h-10 bg-alta-orange flex justify-center rounded-xl mx-10"
      onClick={onClick}
    >
      <h1 className="mt-2">{title}</h1>
    </button>
  );
};

export default Category;
