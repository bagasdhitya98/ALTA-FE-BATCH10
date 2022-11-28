import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    setCookie("Name", name, { path: "/" });
    setCookie("Email", email, { path: "/" });
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    if (cookies.Name) {
      navigate("/home");
    } else {
      navigate("/");
    }
    event.preventDefault();
  };

  return (
    <div className="flex flex-row justify-center w-screen h-full bg-white">
      <div className="mr-60 mt-60 w-1/2 h-full">
        <img
          className="ml-20"
          src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png"
          width={400}
          height={400}
        />
      </div>
      <div className="bg-alta-space-cadet w-screen">
        <form
          className="bg-alta-space-cadet p-48"
          onSubmit={() => handleSubmit()}
        >
          <label className="text-white flex flex-row items-center">
            Name
            <input
              className="text-black input input-bordered w-48 max-w-xs bg-white shadow-xl ml-16 my-5"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label className="text-white flex flex-row items-center">
            Email
            <input
              className="text-black input input-bordered w-48 max-w-xs bg-white shadow-xl ml-16 my-5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label className="text-white flex flex-row items-center">
            Password
            <input
              className="text-black input input-bordered w-48 max-w-xs bg-white shadow-xl ml-10 my-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <input
            className="bg-alta-orange w-60 h-10 rounded mt-20 font-semibold rounded-xl ml-10"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
