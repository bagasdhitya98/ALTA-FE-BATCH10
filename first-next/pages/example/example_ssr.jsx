import React from "react";
import axios from "axios";

export async function getServerSideProps() {
  // Fetching data from an API
  const res = await fetch("https://worldtimeapi.org/api/ip");
  const time = await res.json();
  // Pass the data to the page via props
  return { props: { time } };
}

// export const getServerSideProps = async () => {
//   const response = await axios.get(`https://worldtimeapi.org/api/ip`);
//   const dateTime = response.data;
//   return { props: { dateTime } };
// };

const ExampleSsr = ({ time }) => {
  return (
    <div className="w-screen h-screen bg-white">
      <h1 className="text-black">{time?.datetime}</h1>
    </div>
  );
};

export default ExampleSsr;
