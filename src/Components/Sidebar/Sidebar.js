// import { useState } from "react";
// import "./Sidebar.css";

// function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <div
//         class="w3-sidebar w3-bar-block w3-border-right"
//         style={{ display: isOpen ? "block" : "none" }}
//         id="mySidebar"
//       >
//         <button
//           onClick={() => {
//             console.log("closed");
//             setIsOpen(false);
//           }}
//           class="w3-bar-item w3-large"
//         >
//           Close &times;
//         </button>
//         <a href="/Home" class="w3-bar-item w3-button">
//           Home
//         </a>
//         <a href="/AllQuizPage" class="w3-bar-item w3-button">
//           Select a quiz
//         </a>
//       </div>

//       <div class="navbarClass" style={{ backgroundColor: "black" }}>
//         <button
//           class="w3-button w3-xlarge"
//           onClick={() => {
//             console.log("open");
//             setIsOpen(true);
//           }}
//           style={{ display: "inline-block", backgroundColor: "black" }}
//         >
//           ☰
//         </button>
//         <div
//           style={{
//             height: "30px",
//             display: "inline-block",
//             width: "95%",
//             padding: "0%",
//             backgroundColor: "black",
//           }}
//           class="w3-container"
//         >
//           <h1
//             style={{
//               textAlign: "center",
//               padding: "0%",
//               fontFamily: "times new roman",
//               backgroundColor: "black",
//             }}
//           >
//             Advanced Database System Lab Assignment
//           </h1>
//         </div>
//       </div>

//       {/* <div class="w3-container">
//         <p>This is Dummy content</p>
//         <p>This is Dummy content</p>
//         <p>This is Dummy content</p>
//       </div> */}
//     </div>
//   );
// }

// export default Sidebar;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const logout = () => {
    localStorage.setItem("loggedin", false);
    navigate("/");
  };

  return (
    <div>
      <div
        className={`w-64 bg-gray-900 h-full text-white fixed top-0 left-0 transition-all duration-300 ${
          isOpen ? "ml-0" : "-ml-64"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-white text-3xl absolute top-2 right-2"
        >
          &times;
        </button>
        <a href="/Home" className="block py-4 px-6 hover:bg-gray-700">
          Home
        </a>
        <a href="/AllQuizPage" className="block py-4 px-6 hover:bg-gray-700">
          Select a quiz
        </a>
        <a
          href="/"
          className="block py-4 px-6 hover:bg-gray-700"
          onClick={logout}
        >
          Log out
        </a>
      </div>

      <div className="flex items-center justify-between bg-black">
        <button
          className="text-white text-3xl p-3"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>
        <h1 className="text-white w-full text-center text-2xl py-3 px-4">
          Quiz app
        </h1>
      </div>
    </div>
  );
}

export default Sidebar;
