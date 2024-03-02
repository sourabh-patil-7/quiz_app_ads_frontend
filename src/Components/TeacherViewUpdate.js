import axios from "axios";
import React, { useEffect, useState } from "react";
import TeacherSidebar from "./Sidebar/TeacherSidebar";

function SeeQuestions({ data, onUpdate, onDelete }) {
  const [question, setQuestion] = useState(data);
  const [changed, isChanged] = useState(true);

  function handleUpdate() {
    isChanged(false);
  }

  function handleSave() {
    axios
      .patch("http://localhost:5000/questions/" + question.q_id, question)
      .then((res) => {
        console.log("sent res", res.data);
        onUpdate(question);
        isChanged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete() {
    axios
      .delete("http://localhost:5000/questions/" + question.q_id)
      .then((res) => {
        console.log("res delete", res);
        onDelete(question.q_id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="border rounded-lg p-4 mb-4">
      <textarea
        value={question.description}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, description: event.target.value })
        }
        rows="2"
        className="w-full mb-2 p-2 border rounded"
        placeholder="Description"
      />
      <input
        type="text"
        value={question.option1}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, option1: event.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        placeholder="Option 1"
      />
      <input
        type="text"
        value={question.option2}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, option2: event.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        placeholder="Option 2"
      />
      <input
        type="text"
        value={question.option3}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, option3: event.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        placeholder="Option 3"
      />
      <input
        type="text"
        value={question.option4}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, option4: event.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        placeholder="Option 4"
      />
      <input
        type="text"
        value={question.answer}
        disabled={changed}
        onChange={(event) =>
          setQuestion({ ...question, answer: event.target.value })
        }
        className="w-full mb-2 p-2 border rounded"
        placeholder="Answer"
      />
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 mr-2 rounded hover:bg-blue-600"
          onClick={handleUpdate}
        >
          Edit
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 mr-2 rounded hover:bg-green-600"
          onClick={handleSave}
          disabled={changed}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function TeacherViewUpdate() {
  const [questions, setQuestions] = useState([]);
  const [quizOptions, setQuizOptions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/quiz")
      .then((res) => {
        setQuizOptions(res.data.map((quiz) => quiz.quiz_id));
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  function handleQuizSelection(quizId) {
    axios
      .get("http://localhost:5000/questions/quizId/" + quizId)
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleQuestionUpdate(updatedQuestion) {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.q_id === updatedQuestion.q_id ? updatedQuestion : question
      )
    );
  }

  function handleQuestionDelete(questionId) {
    setQuestions((prevQuestions) =>
      prevQuestions.filter((question) => question.q_id !== questionId)
    );
  }

  return (
    <div>
      <TeacherSidebar />
      <div className="flex">
        <div className="w-full p-8">
          <h1 className="text-2xl mb-4">Update a question</h1>
          <div className="flex flex-wrap mb-4">
            {quizOptions.map((quizId) => (
              <button
                key={quizId}
                className="bg-blue-500 text-white py-2 px-4 rounded mr-2 mb-2 hover:bg-blue-600"
                onClick={() => handleQuizSelection(quizId)}
              >
                Quiz {quizId}
              </button>
            ))}
          </div>
          <div>
            {questions.map((question) => (
              <SeeQuestions
                key={question.q_id}
                data={question}
                onUpdate={handleQuestionUpdate}
                onDelete={handleQuestionDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherViewUpdate;
