import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <Link to={"/signuppage"}>
        {" "}
        <button>SingUp</button>{" "}
      </Link>
      <Link to={"/loginpage"}>
        {" "}
        <button>SingUp</button>{" "}
      </Link>
    </div>
  );
};

export default HomePage;
