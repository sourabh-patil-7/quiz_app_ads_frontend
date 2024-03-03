// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";
// function Scorecard() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     axios
//       .post("https://quizzfy-backend2.onrender.com/questions/calculateAnswer", {
//         question: state.answerSheet,
//       })
//       .then((res) => {
//         console.log("Res", res);
//         setScore(res.data.correct);
//       })
//       .catch((err) => {
//         console.log("Err", err);
//       });
//   });

//   return (
//     <>
//       <Sidebar />
//       <div className="mainContainer">
//         <h1>Your total score is {score}</h1>
//       </div>
//     </>
//   );
// }
// export default Scorecard;

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "../Sidebar/Sidebar";

// function Scorecard() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     axios
//       .post("https://quizzfy-backend2.onrender.com/questions/calculateAnswer", {
//         question: state.answerSheet,
//       })
//       .then((res) => {
//         console.log("Res", res);
//         localStorage.setItem("score", res.data.correct);
//         setScore(res.data.correct);
//         let user_id = localStorage.getItem("user_id");

//       })
//       .catch((err) => {
//         console.log("Err", err);
//       });
//   });

//   return (
//     <>
//       <Sidebar />
//       <div className="mainContainer bg-white shadow-md rounded-md p-8 flex justify-center item-center">
//         <h1 className="text-2xl font-bold mb-4 text-center">
//           Your total score is {score}
//         </h1>
//       </div>
//     </>
//   );
// }

// export default Scorecard;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";

function Scorecard() {
  const { state } = useLocation();
  const [score, setScore] = useState(0);
  const [resultSubmitted, setResultSubmitted] = useState(false);
  let flag = true;
  useEffect(() => {
    console.log(state.answerSheet);
    if (!resultSubmitted) {
      axios
        .post(
          "https://quizzfy-backend2.onrender.com/questions/calculateAnswer",
          {
            question: state.answerSheet,
          }
        )
        .then((res) => {
          console.log("Res", res);
          setScore(res.data.correct);
          const user_id = localStorage.getItem("user_id");
          const quiz_id = localStorage.getItem("quiz_id");
          const submissionData = {
            user_id: user_id,
            quiz_id: quiz_id,
            score: res.data.correct,
          };

          if (flag) {
            axios
              .post(
                "https://quizzfy-backend2.onrender.com/result",
                submissionData
              )
              .then((response) => {
                console.log("Result inserted successfully:", response.data);
                setResultSubmitted(true); // Set flag to true after successful submission
              })
              .catch((error) => {
                console.error("Error inserting result:", error);
              });
            flag = false;
          }
        })
        .catch((err) => {
          console.log("something wrong...");
          console.log("Err", err);
        });
    }
  }, []);

  return (
    <>
      <Sidebar />
      <div className="mainContainer bg-white shadow-md rounded-md p-8 flex justify-center item-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Your total score is {score}
        </h1>
      </div>
    </>
  );
}

export default Scorecard;
