import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TeacherViewUpdate.css";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import Select from "react-select";

function SeeQuestions(props) {
  const [changed, isChanged] = useState(true);
  // console.log("options", props.data.option1);
  const [question, setQuestion] = useState({
    description: props.data.description,
    option1: props.data.option1,
    option2: props.data.option2,
    option3: props.data.option3,
    option4: props.data.option4,
    answer: props.data.answer,
    q_id: props.data.q_id,
    author: "xyz",
    quiz_id: props.data.quiz_id,
  });

  function handleUpdate(event) {
    isChanged(false);
  }
  function handleSave(event) {
    axios
      .patch("http://localhost:5000/questions/" + question.q_id, question)
      .then((res) => {
        console.log("sent res", res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("updated", question);
  }
  function handleDelete(event) {
    axios
      .delete("http://localhost:5000/questions/" + question.q_id)
      .then((res) => {
        console.log("res delete", res);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="seeQuestionsDiv">
      <textarea
        type="text"
        value={question.description}
        disabled={changed}
        onChange={(event) => {
          const temp = { ...question };
          temp.description = event.target.value;
          setQuestion(temp);
        }}
        name=""
        id=""
        cols="100"
        rows="2"
        className="seeQuestionTextArea"
      />
      <br />
      <input
        type="text"
        disabled={changed}
        value={question.option1}
        className="seeQuestionInput"
        onChange={(event) => {
          const temp = { ...question };
          temp.option1 = event.target.value;
          setQuestion(temp);
        }}
      />
      <br />
      <input
        type="text"
        disabled={changed}
        value={question.option2}
        className="seeQuestionInput"
        onChange={(event) => {
          const temp = { ...question };
          temp.option2 = event.target.value;
          setQuestion(temp);
        }}
      />
      <br />
      <input
        type="text"
        disabled={changed}
        value={question.option3}
        className="seeQuestionInput"
        onChange={(event) => {
          const temp = { ...question };
          temp.option3 = event.target.value;
          setQuestion(temp);
        }}
      />
      <br />
      <input
        type="text"
        disabled={changed}
        value={question.option4}
        className="seeQuestionInput"
        onChange={(event) => {
          const temp = { ...question };
          temp.option4 = event.target.value;
          setQuestion(temp);
        }}
      />
      <br />
      <input
        type="text"
        disabled={changed}
        value={question.answer}
        className="seeQuestionInput"
        onChange={(event) => {
          const temp = { ...question };
          temp.answer = event.target.value;
          setQuestion(temp);
        }}
      />
      <br />
      <br />
      <button
        style={{ marginRight: "1%" }}
        className="TeacherViewButton"
        onClick={handleUpdate}
      >
        Edit
      </button>
      <button
        style={{ marginRight: "1%" }}
        className="TeacherViewButton"
        onClick={handleSave}
      >
        Update
      </button>
      <button className="TeacherViewButton" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

function TeacherViewUpdate() {
  const [oneQue, setOneQue] = useState([]);
  const [allQuestions, setAllQuestion] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/quiz")
      .then((res) => {
        console.log("Res", res);
        for (let i = 0; i < res.data.length; i++) {
          setQuizOptions((arr) =>
            arr.concat({
              label: res.data[i].quiz_id,
              value: res.data[i].quiz_id,
            })
          );
        }
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);
  return (
    <div>
      <TeacherSidebar />
      <h1 style={{ textAlign: "center" }}>Update a question</h1>
      <Select
        placeholder="Select a quiz"
        className="ReactSelect -z-10"
        options={quizOptions}
        onChange={(e) => {
          console.log(e);
          setSelectedQuiz(e.value);
          axios
            .get("http://localhost:5000/questions/quizId/" + e.value)
            .then((res) => {
              console.log("Res value", res.data);
              setAllQuestion(res.data);

              let currQuizQuestions = [];
              for (let i = 0; i < res.data.length; i++) {
                // console.log("res nick", res.data[i]);
                currQuizQuestions.push(<SeeQuestions data={res.data[i]} />);
                // setOneQue((arr) =>
                //   arr.concat(<SeeQuestions data={res.data[i]} />)
                // );
              }
              setOneQue(currQuizQuestions);
              console.log(currQuizQuestions);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      />

      {oneQue}
    </div>
  );
}

export default TeacherViewUpdate;
