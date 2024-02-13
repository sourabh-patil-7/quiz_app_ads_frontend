// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();
//   return (
//     <div style={{ textAlign: "center", fontFamily: "ti" }}>
//       <h1 style={{ fontFamily: "times new roman" }}>Login As Faculty</h1>
//       <div className="facultyLogin" style={{ backgroundColor: "black", color:"white" }}>
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             console.log(event.target.facultyId.value);
//             axios
//               .post("http://localhost:5000/login/faculty", {
//                 user_id: event.target.facultyId.value,
//                 password: event.target.password.value,
//               })
//               .then((res) => {
//                 localStorage.setItem("loggedin",true);
//                 localStorage.setItem("userType","faculty");
//                 console.log("Res", res);
//                 navigate("/TeacherViewNew");
//               })
//               .catch((err) => {
//                 alert("Invalid Credentials");
//                 console.log("Err", err);
//               });
//           }}
//         >
//           <h3 className="facultyLoginH3">Faculty ID :</h3>
//           <input type="text" name="facultyId" />
//           <br />
//           <h3 className="facultyLoginH3">Password</h3>
//           <input type="password" name="password" />
//           <br />
//           <button className="facultyLoginButton" type="submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user_id: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login/faculty", formData)
      .then((res) => {
        localStorage.setItem("loggedin", true);
        localStorage.setItem("userType", "faculty");
        console.log("Res", res);
        navigate("/TeacherViewNew");
      })
      .catch((err) => {
        alert("Invalid Credentials");
        console.log("Err", err);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg border-2 border-gray-200">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Login As Faculty
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Faculty ID :</h3>
            <input
              type="text"
              name="user_id"
              value={formData.user_id}
              onChange={handleChange}
              placeholder="Enter Faculty ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-lg"
              required
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Password</h3>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 text-lg transition-all duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
