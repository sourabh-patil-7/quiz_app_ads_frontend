// import axios from "axios";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./studentLogin.css";

// function StudentLogin() {
//     const navigate = useNavigate();
//     return (
//         <div style={{ textAlign: "center", fontFamily: "times new roman" }}>
//             <h1 style={{ fontFamily: "times new roman" }}>Login As Student</h1>
//             <div className="studentLogin" style={{ backgroundColor: "black", color:"white"}}>
//                 <form
//                     onSubmit={(event) => {
//                         event.preventDefault();
//                         console.log(event.target.studentId.value);
//                         axios
//                             .post("http://localhost:5000/login/student", {
//                                 user_id: event.target.studentId.value,
//                                 password: event.target.password.value,
//                             })
//                             .then((res) => {
//                                 localStorage.setItem("loggedin",true);
//                                 localStorage.setItem("userType","student");
//                                 console.log("Res", res);
//                                 navigate("/AllQuizPage");
//                             })
//                             .catch((err) => {
//                                 alert("Invalid Credentials");
//                                 console.log("Err", err);
//                             });
//                     }}
//                 >
//                     <h3 className="studentLoginH3">Student ID :</h3>
//                     <input type="text" name="studentId" />
//                     <br />
//                     <h3 className="studentLoginH3">Password</h3>
//                     <input type="password" name="password" />
//                     <br />
//                     <button className="studentLoginButton" type="submit">
//                         Submit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default StudentLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("http://localhost:5000/login/student", formData)
      .then((res) => {
        localStorage.setItem("loggedin", true);
        localStorage.setItem("userType", "student");
        localStorage.setItem("user_id", res.data.user_id);
        console.log("Res", res);
        navigate("/AllQuizPage");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credentials");
        console.log("Err", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-gray-300 max-w-md w-full mx-auto animate-fade-in">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Login As Student
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="studentId" className="block text-lg font-semibold">
              Student ID
            </label>
            <input
              id="studentId"
              name="user_id"
              type="text"
              autoComplete="studentId"
              required
              className="block w-full border border-gray-300 rounded-lg mt-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-lg px-4 py-3"
              placeholder="Enter your student ID"
              value={formData.user_id}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-semibold">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full border border-gray-300 rounded-lg mt-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-lg px-4 py-3"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-lg transition-all duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
