import React from "react";

const Card = ({ title, description, image, onClick }) => {
  return (
    <div className="card w-96 bg-white shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-black">{title}</h2>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={onClick}>
            Read Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
