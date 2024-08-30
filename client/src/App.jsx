import { createContext, useState } from "react";
import Register from "./components/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const authContext = createContext("user");
const setAuthContext = createContext();

function App() {
  const [auth, setAuth] = useState("");

  return (
    <>
      <authContext.Provider value={[auth, setAuth]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </authContext.Provider>
    </>
  );
}

export { App, authContext, setAuthContext };
