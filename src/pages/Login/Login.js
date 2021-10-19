import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { useHistory, useLocation } from "react-router";
// import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const location = useLocation();
  const redirect_uri = location.state?.from || "/home";
  const history = useHistory();

  const {
    setUser,
    error,
    setError,
    password,
    signInWithGoogle,
    handleEmailChange,
    handlePasswordChange,
    handleNameChange,
    processLogin,
    registerNewUser,
    verifyEmail,
    setUserName,
  } = useContext(AuthContext);

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    isLogin ? handleRegisterNewUser() : handleProcessLogin();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
      setUser(result.user);
      setError("");
      history.push(redirect_uri);
    });
    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  const handleProcessLogin = () => {
    processLogin()
      .then((result) => {
        setUser(result.user);
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleRegisterNewUser = () => {
    registerNewUser()
      .then((result) => {
        setUser(result.user);
        handleUpdateProfile();
        verifyEmail();
        setError("");
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateProfile = () => {
    setUserName();
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 py-5">
          <h1 className="text-center text-dark display-3 pb-3">
            {!isLogin ? "Login Here" : "Register Here"}
          </h1>
          <form onSubmit={handleRegistration}>
            {isLogin && (
              <div className="row mb-3">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    onBlur={handleNameChange}
                    className="form-control"
                    id="inputName"
                    placeholder="Your Name"
                  />
                </div>
              </div>
            )}
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  className="form-control"
                  id="inputPassword3"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input
                    onChange={toggleLogin}
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck1"
                  />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    New User?
                  </label>
                </div>
              </div>
            </div>
            <p>{/* <Link to="/register">New User?</Link> */}</p>
            <div className="row mb-3 text-danger">{error}</div>

            <button
              type="submit"
              className="btn"
              style={{
                border: 0,
                backgroundColor: "#ff3f8b",
                color: "white",
                fontWeight: 500,
              }}
            >
              {!isLogin ? "Login" : "Register"}
            </button>
            <div className="mt-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn"
                style={{
                  border: 0,
                  backgroundColor: "#ff3f8b",
                  color: "white",
                  fontWeight: 500,
                }}
              >
                Google Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
