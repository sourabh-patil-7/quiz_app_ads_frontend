// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "./TeacherViewNew.css";
// import TeacherSidebar from "./Sidebar/TeacherSidebar";
// import Select from "react-select";
// // import Select from "react-Select";
// function TeacherViewNew(props) {
//   const [quizOptions, setQuizOptions] = useState([]);
//   const [selectedOption, setSelectedOption] = useState("");

//   const [finalData, setFinalData] = useState({
//     description: "",
//     option1: "",
//     option2: "",
//     option3: "",
//     option4: "",
//     answer: "",
//     author: "xyz",
//     quiz_id: "",
//   });

//   let prevData = { ...finalData };
//   if (props && props.user_id) prevData.author = props.user_id;
//   else prevData.author = "xyz";

//   function handleClick(event) {
//     if (selectedOption === "") {
//       alert("Select a Quiz");
//       return;
//     }
//     event.preventDefault();

//     console.log(finalData);
//     axios
//       .post("http://localhost:5000/questions", finalData)
//       .then((res) => {
//         alert("question created successfully!!!");
//         window.location.reload();
//         console.log("res", res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/quiz")
//       .then((res) => {
//         console.log("Res", res);
//         for (let i = 0; i < res.data.length; i++) {
//           setQuizOptions((arr) =>
//             arr.concat({
//               label: res.data[i].quiz_id,
//               value: res.data[i].quiz_id,
//             })
//           );
//         }
//       })
//       .catch((err) => {
//         console.log("Err", err);
//       });
//   }, []);

//   return (
//     <div >
//       <TeacherSidebar />
//       <h1 style={{ textAlign: "center" }}>Add New Question</h1>
//       <div className="TeacherView" style={{ backgroundColor: "black", color:"white", fontSize:"20px"}}>
//         <h3>Enter Question </h3>
//         <textarea
//           className="teacherTextArea"
//           name=""
//           id=""
//           cols="100"
//           rows="2"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.description = event.target.value;
//             setFinalData(temp);
//           }}
//         ></textarea>
//         <br />
//         <br />
//         <input
//           className="teacherInput"
//           type="text"
//           placeholder="  Option 1"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.option1 = event.target.value;
//             setFinalData(temp);
//           }}
//         />
//         <br />
//         <input
//           className="teacherInput"
//           type="text"
//           placeholder="  Option 2"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.option2 = event.target.value;
//             setFinalData(temp);
//           }}
//         />
//         <br />
//         <input
//           className="teacherInput"
//           type="text"
//           placeholder="  Option 3"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.option3 = event.target.value;
//             setFinalData(temp);
//           }}
//         />
//         <br />
//         <input
//           className="teacherInput"
//           type="text"
//           placeholder="  Option 4"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.option4 = event.target.value;
//             setFinalData(temp);
//           }}
//         />
//         <br />
//         <input
//           className="teacherInput"
//           type="text"
//           placeholder="Enter answer(option number)"
//           onChange={(event) => {
//             const temp = { ...finalData };
//             temp.answer = event.target.value;
//             setFinalData(temp);
//           }}
//         />
//         <br />
//         <br />
//         <div style={{ textAlign: "center", color:"black" }}>
//           <Select
//             placeholder="Select a quiz"
//             className="ReactSelect"
//             options={quizOptions}
//             onChange={(e) => {
//               console.log(e);
//               setSelectedOption(e.value);
//               let prevData = { ...finalData };
//               prevData.quiz_id = e.value;
//               setFinalData(prevData);
//             }}
//           />
//         </div>
//         <br />
//         <br />
//         <button className="TeacherButton" onClick={handleClick}>
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TeacherViewNew;

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import TeacherSidebar from "./Sidebar/TeacherSidebar";
import Select from "react-select";

function TeacherViewNew(props) {
  const [quizOptions, setQuizOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [finalData, setFinalData] = useState({
    description: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: "",
    author: "xyz",
    quiz_id: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/quiz")
      .then((res) => {
        const quizOptionsData = res.data.map((quiz) => ({
          label: quiz.quiz_id,
          value: quiz.quiz_id,
        }));
        setQuizOptions(quizOptionsData);
      })
      .catch((err) => {
        console.log("Err", err);
      });
  }, []);

  function handleClick(event) {
    if (selectedOption === "") {
      alert("Select a Quiz");
      return;
    }
    event.preventDefault();
    console.log(selectedOption);
    console.log(typeof selectedOption);
    finalData.quiz_id = selectedOption;

    console.log(finalData);

    axios
      .post("http://localhost:5000/questions", finalData)
      .then((res) => {
        alert("Question created successfully!!!");
        window.location.reload();
        console.log("res", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleChange = (event, field) => {
    // console.log("change");
    const value = event.target.value;
    // console.log(event.target.value);
    setFinalData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const handleEditorChange = (editorState) => {
  //   setEditorState(editorState);
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   // Update finalData with the contentRaw as needed
  // };

  return (
    <div className="">
      <TeacherSidebar />
      <div className="flex flex-col justify-center items-center w-full p-10">
        <h1 className="text-3xl font-semibold mb-8">Add New Question</h1>
        <div className="TeacherView bg-gray-900 text-white p-8 rounded-lg w-full max-w-lg">
          <h3 className="mb-4">Enter Question</h3>
          <textarea
            className="teacherTextArea bg-gray-700 text-white p-2 rounded-lg w-full"
            name="description"
            cols="100"
            rows="2"
            onChange={(event) => handleChange(event, "description")}
          ></textarea>

          <br />
          <br />
          {[1, 2, 3, 4].map((num) => (
            <input
              key={num}
              className="teacherInput bg-gray-700 text-white p-2 rounded-lg w-full mb-4"
              type="text"
              placeholder={`Option ${num}`}
              onChange={(event) => handleChange(event, `option${num}`)}
            />
          ))}
          <input
            className="teacherInput bg-gray-700 text-white p-2 rounded-lg w-full mb-4"
            type="text"
            placeholder="Enter answer (option number)"
            onChange={(event) => handleChange(event, "answer")}
          />
          <br />
          <div className="text-center">
            <Select
              placeholder="Select a quiz"
              className="ReactSelect text-black"
              options={quizOptions}
              onChange={(selectedOption) =>
                setSelectedOption(selectedOption.value)
              }
              styles={{
                control: (provided) => ({
                  ...provided,
                  color: "black", // Change text color to black
                }),
              }}
            />
          </div>
          <br />
          <button
            className="TeacherButton bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherViewNew;
