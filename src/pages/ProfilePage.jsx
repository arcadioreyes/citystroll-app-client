import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import placeholderProfilePicture from "../images/avatar.png";

const ProfilePage = () => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <div>
      <h1>This is your profile page {user.username}</h1>

      {isLoggedIn && (
        <>
          <p>Welcome back {user.username}!</p>
          <br />
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : placeholderProfilePicture
            }
            alt={"User's Profile picture"}
            className="profilePicture"
          />
          <br />
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to={"/signup"}>
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to={"/login"}>
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </div>
  );
};

export default ProfilePage;
