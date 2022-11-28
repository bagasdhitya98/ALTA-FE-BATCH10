import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location?.state?.item;

  return (
    <>
      {item ? (
        <div className="m-20 h-full w-screen">
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            Back to Home
          </button>
          <img
            className="mx-60"
            src={item.urlToImage}
            width={800}
            height={100}
          />
          <h1 className="text-black mx-60 my-20">{item.title}</h1>
          <p className="text-black mx-60">{item.content}</p>
        </div>
      ) : (
        <div className="m-20 h-full w-screen">
          <h1>Sorry, something went wrong ...</h1>
        </div>
      )}
    </>
  );
};

export default Detail;
