import "./App.css";
import HomePage from "./landingPage/home/HomePage";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Register from "./landingPage/signup/Signup";
import Login from "./landingPage/login/login";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <Navbar />

      <Register />
      <Login />

      <HomePage />
      <Footer />
    </>
  );
}

export default App;
