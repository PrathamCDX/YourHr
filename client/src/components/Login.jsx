import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { authContext } from "../App.jsx";
import axios from "axios";

const Login = () => {
  const [auth, setAuth] = useContext(authContext);

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://yourhr-backend-zyy8.onrender.com/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      })
      .then((res) => {
        if (res.data.success) setAuth(userDetails.email);
      });
  };

  if (auth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="flex flex-col text-center">
      <div className="font-bold text-4xl p-4">Login Page</div>
      <form onSubmit={handleSubmit}>
        <div className="font-bold text-3xl">Email</div>
        <input
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              email: e.target.value,
            });
          }}
          type="email"
          placeholder="Email"
          className="text-black"
        />
        <div className="font-bold text-3xl">Password</div>
        <input
          onChange={(e) => {
            setUserDetails({
              ...userDetails,
              password: e.target.value,
            });
          }}
          type="Password"
          placeholder="Password"
          className="text-black"
        />
        <button
          type="submit"
          className="font-bold text-2xl bg-slate-300 p-1 rounded-md"
        >
          Login
        </button>
      </form>
      <Link to="/register" className="pt-4 underline">
        New User? Resgister
      </Link>
    </div>
  );
};

export default Login;
