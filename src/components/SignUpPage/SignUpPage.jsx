import React from "react";
import { useState } from "react";

const SignUpPage = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {};
  return (
    <div>
      <h1>Welcome Stroller to the Sign Up Page!</h1>
      <br />

      <form>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          value={user.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          value={user.city}
          onChange={handleChange}
        />
        <button type="submit">Create my account</button>
      </form>
    </div>
  );
};

export default SignUpPage;
