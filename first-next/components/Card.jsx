import React from "react";

const Card = ({ title, description, image, onClick }) => {
  return (
    <div className="card w-96 bg-white shadow-xl mx-6 my-10">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-alta-orange font-semibold">{title}</h2>
        <p className="text-alta-space-cadet">{description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn bg-alta-space-cadet text-white"
            onClick={onClick}
          >
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
