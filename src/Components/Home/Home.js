// import React from "react";

// import "./Home.css";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";
// import TeacherSidebar from "../Sidebar/TeacherSidebar";

// function Home() {
//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.setItem("loggedin", false);
//     navigate("/");
//   };

//   const userType = localStorage.getItem("userType");
//   return (
//     <div>
//       {/* Conditionally render sidebar based on userType */}
//       {userType === "student" ? <Sidebar /> : <TeacherSidebar />}
//       <h1 style={{ textAlign: "center" }}>About us</h1>
//       <div className="homeImg">
//         <p>
//           Walchand College of Engineering is a college in the city of Sangli,
//           Maharashtra, India. The WCE campus is situated on nearly 90 acres of
//           land in Vishrambag, roughly midway between the twin cities of Sangli
//           and Miraj. The college was established in 1947 by the Dhondumama Sathe
//           and began with an undergraduate course in Civil Engineering with a
//           capacity of 60 students. It was affiliated with Bombay University in
//           1947. After Pune University was set up in 1948, the college became
//           affiliated with Pune University. In 1955, the college was renamed
//           after Walchand Hirachand, an industrialist. Since the establishment of
//           Shivaji University, at Kolhapur in 1962, Walchand College of
//           Engineering, Sangli has been affiliated with Shivaji University. Since
//           2007, it has been an autonomous college offering the B.Tech. degree
//           [2] in Maharashtra with 'financial and academic autonomy'.[3] It is
//           known for its vast campus and placement.
//         </p>
//       </div>
//       <button className="LogoutButton" onClick={logout}>
//         log out
//       </button>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TeacherSidebar from "../Sidebar/TeacherSidebar";

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.setItem("loggedin", false);
    navigate("/");
  };

  const userType = localStorage.getItem("userType");
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Conditionally render sidebar based on userType */}
      {userType === "student" ? <Sidebar /> : <TeacherSidebar />}
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-semibold text-center mb-8">About us</h1>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <p className="text-lg leading-relaxed text-gray-700">
          QuizzFy is an innovative online platform that redefines the quiz
          experience. Offering a vast array of topics spanning from general
          knowledge to specialized subjects, QuizzFy ensures there's something
          for everyone. Users can dive into diverse quiz categories, ranging
          from science and history to pop culture and literature, providing an
          immersive learning and entertainment experience. With customizable
          quizzes, individuals can tailor their challenges to suit their
          interests and educational goals, adjusting difficulty levels and
          question types as desired. The platform also fosters competitive
          gameplay, allowing users to challenge friends or compete against
          others in real-time quizzes, adding an extra layer of excitement.
          Detailed performance tracking enables users to monitor their progress
          and improvement over time, providing valuable insights into their
          strengths and areas for growth. Moreover, QuizzFy boasts a vibrant
          community where users can engage with fellow quiz enthusiasts, share
          their creations, and discover new content. Whether you're seeking to
          expand your knowledge, have fun with friends, or simply pass the time,
          QuizzFy offers an unparalleled quiz experience that will keep you
          engaged and entertained. Join the QuizzFy community today and embark
          on a journey of discovery and excitement!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

// <button
//   className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg absolute bottom-8 left-8"
//   onClick={logout}
// >
//   Log out
// </button>
