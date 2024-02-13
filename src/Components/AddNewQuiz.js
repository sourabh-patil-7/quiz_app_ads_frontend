// import axios from "axios";
// import TeacherSidebar from "./Sidebar/TeacherSidebar";
// import { useNavigate } from "react-router-dom";

// function AddNewQuiz() {
//   const navigate = useNavigate();
//   return (
//     <>
//       <TeacherSidebar />
//       <div
//         className="mainContainer"
//         style={{ backgroundColor: "black", color: "white", fontSize: "20px" }}
//       >
//         {/* quiz_id, description, password,user_id */}
//         <form
//           onSubmit={(event) => {
//             event.preventDefault();
//             axios
//               .post("http://localhost:5000/quiz", {
//                 quiz_id: event.target.quiz_id.value,
//                 quiz_description: event.target.quiz_description.value,
//                 user_id: "xyz",
//                 quiz_password: "1234",
//               })
//               .then((res) => {
//                 alert("Quiz created successfully!!!");
//                 // Clear the form fields after submission
//                 event.target.reset(); // Reset the form
//                 console.log("Res", res);
//               })
//               .catch((err) => {
//                 console.log("Err", err);
//               });
//           }}
//         >
//           <label>Enter Quiz Id : </label>
//           <input type="text" name="quiz_id"></input>
//           <br />
//           <br />
//           <label>Enter Quiz description : </label>
//           <input type="text" name="quiz_description"></input>
//           <br />
//           <br />
//           <button type="submit" style={{ width: "150px" }}>
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default AddNewQuiz;

import axios from "axios";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import { useNavigate } from "react-router-dom";

function AddNewQuiz() {
  const navigate = useNavigate();
  return (
    <>
      <TeacherSidebar />
      <div className=" text-white min-h-screen flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
          <h1 className="text-3xl font-semibold mb-6 text-center">
            Create New Quiz
          </h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const formData = new FormData(event.target);
              const data = Object.fromEntries(formData.entries());
              axios
                .post("http://localhost:5000/quiz", {
                  quiz_id: data.quiz_id,
                  quiz_description: data.quiz_description,
                  user_id: "xyz",
                  quiz_password: "1234",
                })
                .then((res) => {
                  alert("Quiz created successfully!!!");
                  event.target.reset(); // Reset the form
                  console.log("Res", res);
                })
                .catch((err) => {
                  console.log("Err", err);
                });
            }}
          >
            <div className="mb-4">
              <label htmlFor="quiz_id" className="block text-white mb-2">
                Quiz ID :
              </label>
              <input
                id="quiz_id"
                type="text"
                name="quiz_id"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="quiz_description"
                className="block text-white mb-2"
              >
                Quiz Description :
              </label>
              <input
                id="quiz_description"
                type="text"
                name="quiz_description"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-gray-700 text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddNewQuiz;
