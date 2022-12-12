import React, { useState } from "react";
import * as yup from "yup";

const ExampleYup = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  let schema = yup.object().shape({
    name: yup.string().required(),
    age: yup.number().required().positive().integer(),
    address: yup.string().required().min(16),
  });

  const handleSubmit = () => {
    schema
      .isValid({
        name: name,
        age: age,
        address: address,
      })
      .then((valid) => {
        console.log("valid :", valid);
        alert(valid);
      });
  };

  return (
    <div className="w-screen h-screen bg-white">
      <div className="text-black p-10">
        <form onSubmit={() => handleSubmit()}>
          <label className="mr-10">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="mr-10 rounded-md bg-white shadow-md"
          />
          <label className="mr-10">Age</label>
          <input
            onChange={(e) => setAge(e.target.value)}
            className="mr-10 rounded-md bg-white shadow-md"
          />
          <label className="mr-10">Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="mr-10 rounded-md bg-white shadow-md"
          />
          <div className="mt-10">
            <button className="btn bg-alta-orange text-white" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExampleYup;
