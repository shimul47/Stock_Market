import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

const Register = () => {
  const { userLoggedIn, setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsRegistering(true);

    try {
      const res = await doCreateUserWithEmailAndPassword(email, password);
      const user = res.user;
      setCurrentUser(user);
      // console.log(user);
      navigate("http://localhost:3001/");
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <main className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold">Create a New Account</h3>
          <p className="text-muted mb-0">
            Without an account you can't visit Dashboard
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              autoComplete="email"
              required
              disabled={isRegistering}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              autoComplete="new-password"
              required
              disabled={isRegistering}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label fw-bold">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              autoComplete="off"
              required
              disabled={isRegistering}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger fw-bold text-center py-2">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary w-100 fw-medium"
            disabled={isRegistering}
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="text-center mt-3">
            <small className="text-muted">Already have an account?</small>{" "}
            <Link to="/login" className="fw-bold text-decoration-none">
              Continue
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
