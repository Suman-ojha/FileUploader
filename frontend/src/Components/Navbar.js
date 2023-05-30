import React, { useContext } from "react";
import { useAuth } from "../Context/AuthProvider";
import { loginSuccess } from "../Services/auth-service";
import { saveUserToken } from "../Services/localStorage";

const Navbar = () => {
  const { login, logout, user } = useAuth();
  const handelLogin = () => {
    login((response) => {
      console.log({ response });
      const { email, displayName, uid, photoURL } = response.user;
      const payload = {
        email,
        displayName,
        uid,
        photoURL,
      };

      loginSuccess(payload).then((res) => {
         saveUserToken(res.accessToken);
      });
    });
  };
  const handelLogOut = () => {
    logout();
  };
  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          File Uploader
        </a>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav d-flex flex-end">
            {/* <a className="nav-link " aria-current="page">
              Home
            </a> */}
            {user && <p className="nav-link"> Hello 🙏🏻 {user.displayName}</p>}
            {/* if user not exsit show Login  */}
            {!user && (
              <a
                className="nav-link "
                aria-current="page"
                onClick={handelLogin}
              >
                Login
              </a>
            )}
              {/* if user exits ,,show logout */}
            {user && (
              <a
                className="nav-link "
                aria-current="page"
                onClick={handelLogOut}
              >
                Logout
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
