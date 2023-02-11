import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const HomePage = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      {isLoggedIn && <p>Welcome back {user.username}!</p>}

      <Link to={"/signuppage"}>
        {" "}
        <button>Sign Up</button>{" "}
      </Link>
      <Link to={"/loginpage"}>
        {" "}
        <button>Login</button>{" "}
      </Link>
    </div>
  );
};

export default HomePage;
