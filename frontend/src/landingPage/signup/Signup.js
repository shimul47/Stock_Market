import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doCreateUserWithEmailAndPassword } from "../../firebase/auth";

const Register = () => {
  const { setCurrentUser } = useAuth();
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
      setCurrentUser(res.user);
      window.location.href = "https://bespoke-starburst-2377df.netlify.app/";
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <main
      className="d-flex align-items-center justify-content-center vh-100"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div
        className="card shadow p-5"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "15px",
          borderTop: "5px solid #1976d2",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Create a New Account</h3>
          <p className="text-muted mb-0">
            Without an account you can't access the Dashboard
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label fw-semibold text-primary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control border-primary"
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={isRegistering}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="form-label fw-semibold text-primary"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control border-primary"
              placeholder="Enter password"
              autoComplete="new-password"
              required
              disabled={isRegistering}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label fw-semibold text-primary"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control border-primary"
              placeholder="Re-enter password"
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
            className="btn btn-primary w-100 fw-semibold"
            disabled={isRegistering}
            style={{ backgroundColor: "#1976d2", borderColor: "#115293" }}
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>

          <div className="text-center mt-3">
            <small className="text-muted">Already have an account?</small>{" "}
            <Link
              to="/login"
              className="fw-semibold text-decoration-none text-primary"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
