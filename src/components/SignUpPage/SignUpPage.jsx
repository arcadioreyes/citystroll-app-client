import React from "react";

const SignUpPage = () => {
  return (
    <div>
      <h1>Welcome to the Sign Up Page Stroller!</h1>
      <br />

      <form>
        <input type="text" name="email" />
        <input type="text" name="username" />
        <input type="password" name="password" />
        <input type="text" name="country" />
        <input type="text" name="city" />
        <button type="submit">Create my account</button>
      </form>
    </div>
  );
};

export default SignUpPage;
