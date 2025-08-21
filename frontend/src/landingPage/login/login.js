import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../firebase/auth";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const { setCurrentUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        const res = await doSignInWithEmailAndPassword(email, password);
        setCurrentUser(res.user);
        window.location.href = "https://bespoke-starburst-2377df.netlify.app/";
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        const res = await doSignInWithGoogle();
        setCurrentUser(res.user);
        window.location.href = "https://celebrated-toffee-2e363e.netlify.app/";
      } catch (err) {
        setErrorMessage(err.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <main
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <div
        className="card shadow p-5"
        style={{
          maxWidth: "420px",
          width: "100%",
          borderRadius: "15px",
          borderTop: "5px solid #1976d2",
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-primary">Welcome Back</h3>
          <p className="text-muted mb-0">Sign in to access your Dashboard</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-primary">Email</label>
            <input
              type="email"
              className="form-control border-primary"
              placeholder="you@example.com"
              autoComplete="email"
              required
              disabled={isSigningIn}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold text-primary">
              Password
            </label>
            <input
              type="password"
              className="form-control border-primary"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              disabled={isSigningIn}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <div className="alert alert-danger py-2 text-center">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            className="btn w-100 fw-semibold mb-3"
            disabled={isSigningIn}
            style={{
              backgroundColor: "#1976d2",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "0.5rem 0",
            }}
          >
            {isSigningIn ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mb-3 text-muted">or</div>

        <button
          onClick={onGoogleSignIn}
          disabled={isSigningIn}
          className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
        >
          <svg
            className="me-2"
            width="20"
            height="20"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                fill="#EA4335"
                d="M24 9.5c3.42 0 6.73 1.29 9.21 3.65l6.85-6.85C35.2 2.17 29.44-.07 23.48 0 14.41 0 6.11 5.12 2.03 13.23l7.98 6.18C12.91 13.72 18.22 9.5 24 9.5z"
              />
              <path
                fill="#FBBC04"
                d="M11 28.6c-1-3-1-6.23 0-9.21l-7.98-6.18C-0.37 20.01-0.37 28 3.03 34.78L11 28.6z"
              />
              <path
                fill="#34A853"
                d="M24 38.5c-6.27 0-11.58-4.22-13.49-9.9l-7.98 6.18C6.11 42.88 14.41 48 24 48c5.95 0 11.73-2.23 16.13-6.22v-6.03h-7.74C30.5 37.67 27.72 38.5 24 38.5z"
              />
              <path
                fill="#4285F4"
                d="M47.53 24.55c0-1.63-.13-3.27-.41-4.87H24v9.34h13.01c-.54 3-2.22 5.62-4.63 7.26l7.74 6.03C44.92 38.03 47.53 31.85 47.53 24.55z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="48" height="48" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {isSigningIn ? "Signing In..." : "Continue with Google"}
        </button>

        <p className="text-center mt-3 mb-0">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="fw-semibold text-decoration-none text-primary"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
