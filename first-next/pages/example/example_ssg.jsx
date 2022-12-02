import React from "react";
import axios from "axios";

export const getStaticProps = async () => {
  const response = await fetch(`https://worldtimeapi.org/api/ip`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

// export const getStaticProps = async () => {
//   const response = await axios.get(`https://worldtimeapi.org/api/ip`);
//   const data = JSON.stringify(response.data);
//   return {
//     props: {
//       data,
//     },
//   };
// };

const ExampleSSG = ({ data }) => {
  console.log("date time :", data);
  return (
    <div className="w-screen h-screen bg-white">
      <h1 className="text-black">
        {data ? data.datetime : `No data available`}
      </h1>
    </div>
  );
};

export default ExampleSSG;
