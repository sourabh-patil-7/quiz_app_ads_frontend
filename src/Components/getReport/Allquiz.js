import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

function AllQuiz() {
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
              navigate(`/quiz/report/${quiz.quiz_id}`, {
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
      <h1 className="text-center mt-5 font-semibold text-3xl text-black">
        Get the report for the quizes
      </h1>
      <div className="text-center font-serif mt-8 text-black">{quizArray}</div>
    </>
  );
}

export default AllQuiz;
