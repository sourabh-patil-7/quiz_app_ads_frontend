// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";

// function AllQuizPage() {
//   const navigate = useNavigate();
//   const [quizArray, setQuizArray] = useState([]);
//   useEffect(() => {
//     console.log("Use Effect");
//     axios
//       .get("http://localhost:5000/quiz")
//       .then((res) => {
//         console.log("RES", res.data);

//         for (let i = 0; i < res.data.length; i++) {
//           setQuizArray((arr) =>
//             arr.concat(
//               <button
//                 style={{
//                   width: "30%",
//                   marginRight: "15px",
//                   marginBottom: "15px",
//                 }}
//                 onClick={() =>
//                   navigate("/quiz/" + res.data[i].quiz_id, {
//                     state: {
//                       quiz_id: res.data[i].quiz_id,
//                       user_id: res.data[i].user_id,
//                     },
//                   })
//                 }
//               >
//                 {res.data[i].quiz_id}
//               </button>
//             )
//           );
//         }
//       })
//       .catch((err) => {
//         console.log("ERR", err);
//       });
//   }, []);

//   return (
//     <>
//       <Sidebar />
//       <div
//         style={{
//           textAlign: "center",
//           fontFamily: "times new roman",
//           marginTop: "50px",
//           color: "black",
//         }}
//       >
//         {quizArray}
//       </div>
//     </>
//   );
// }

// export default AllQuizPage;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function AllQuizPage() {
  const navigate = useNavigate();
  const [quizArray, setQuizArray] = useState([]);

  useEffect(() => {
    console.log("Use Effect");
    axios
      .get("http://localhost:5000/quiz")
      .then((res) => {
        console.log("RES", res.data);

        const newQuizArray = res.data.map((quiz) => (
          <button
            key={quiz.quiz_id}
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4 mb-4"
            onClick={() =>
              navigate(`/quiz/${quiz.quiz_id}`, {
                state: {
                  quiz_id: quiz.quiz_id,
                  user_id: quiz.user_id,
                },
              })
            }
          >
            {quiz.quiz_id}
          </button>
        ));

        setQuizArray(newQuizArray);
      })
      .catch((err) => {
        console.log("ERR", err);
      });
  }, [navigate]);

  return (
    <>
      <Sidebar />
      <div className="text-center font-serif mt-8 text-black">{quizArray}</div>
    </>
  );
}

export default AllQuizPage;
