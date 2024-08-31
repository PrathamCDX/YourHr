import react, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { authContext } from "../App.jsx";

const Dashboard = () => {
  const [auth, setAuth] = useContext(authContext);
  const [response, setResponse] = useState(false);
  const [file, setFile] = useState();
  const [data, SetData] = useState({
    name: "",
    phone: "",
    email: "",
    resume: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataFinal = {};
    const formdata = new FormData(document.getElementById("formid"));
    for (const [key, value] of formdata) {
      formDataFinal[key] = value;
    }
    axios
      .post(
        "https://yourhr-backend-zyy8.onrender.com/auth/upload",
        formDataFinal,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setResponse(res.data.success);
      });
  };

  if (!auth) return <Navigate to="/login" />;

  if (response) {
    return (
      <div className="font-bold text-4xl py-4 text-center">
        Thanks for uploading
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="md:flex justify-between font-bold text-3xl py-4 px-3 border overflow-hidden border-slate-950 rounded-md m-2">
          Dashboard
          <div
            onClick={() => {
              setAuth("");
            }}
            className="md:mt-0 bg-slate-400 p-2 px-3 rounded-md w-32 mt-5 "
          >
            Logout
          </div>
        </div>
      </div>
      <div className="border border-slate-950 rounded-md m-2 p-2">
        <form
          className="flex flex-col items-start"
          method="post"
          action="http://localhost:7777/auth/upload"
          encType="multipart/form-data"
          id="formid"
        >
          {/* class 10 class 12 qualification sgpa/cgpa  Experience*/}
          <div className="font-bold text-xl md:text-2xl">
            Name:
            <input
              onChange={(e) => {
                SetData({
                  ...data,
                  name: e.target.value,
                });
              }}
              name="name"
              type="text"
              placeholder="name"
              className="font-medium p-2"
            />
          </div>
          <div className="font-bold text-xl md:text-2xl">
            Phone:
            <input
              onChange={(e) => {
                SetData({
                  ...data,
                  phone: e.target.value,
                });
              }}
              name="phone"
              type="number"
              placeholder="Phone"
              className="font-medium  p-2"
            />
          </div>
          <div className="font-bold text-xl md:text-2xl">
            Email:
            <input
              onChange={(e) => {
                SetData({
                  ...data,
                  email: e.target.value,
                });
              }}
              name="email"
              type="email"
              placeholder="name"
              className=" p-2 font-medium"
            />
          </div>
          <div className="font-bold text-2xl">
            Resume/CV:
            <input
              name="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              type="file"
              placeholder="name"
              className=" p-2 font-medium"
            />
            <div>
              <input
                className="bg-slate-400 p-2 px-3 rounded-md"
                type="submit"
                value="upload"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
