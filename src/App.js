import "./App.css";
import StudentDisplay from "./Components/StudentView/StudentMainView.js";
import Login from "./Components/Login.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllQuizPage from "./Components/StudentView/AllQuizPage";
import Sidebar from "./Components/Sidebar/Sidebar";
import Scorecard from "./Components/StudentView/Scorecard";
import TeacherViewNew from "./Components/TeacherViewNew";
import TeacherViewUpdate from "./Components/TeacherViewUpdate";
import StudentLogin from "./Components/studentLogin/studentLogin";
import Landing from "./Components/landing/landingPage";
import AddNewQuiz from "./Components/AddNewQuiz";
import Home from "./Components/Home/Home.js";
import Privateroute from "./Components/PrivateRoute.js";



function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            exact
            path="/quiz/:quiz_id"
            element={<StudentDisplay />}
          ></Route>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/studentLogin" element={<StudentLogin />}></Route>
          <Route exact path="/facultyLogin" element={<Login />}></Route>
          <Route
            exact
            path="/Home"
            element={
              <Privateroute>
                <Home />
              </Privateroute>
            }
          ></Route>
          <Route
            exact
            path="/AllQuizPage"
            element={
              <Privateroute>
                <AllQuizPage />
              </Privateroute>
            }
          ></Route>
          <Route
            exact
            path="/Scorecard"
            element={
              <Privateroute>
                <Scorecard />
              </Privateroute>
            }
          ></Route>
          <Route
            exact
            path="/TeacherViewUpdate"
            element={
              <Privateroute>
                <TeacherViewUpdate />
              </Privateroute>
            }
          ></Route>
          <Route
            exact
            path="/TeacherViewNew"
            element={
              <Privateroute>
                <TeacherViewNew />
              </Privateroute>
            }
          ></Route>
          <Route
            exact
            path="/AddNewQuiz"
            element={
              <Privateroute>
                <AddNewQuiz />
              </Privateroute>
            }
          ></Route>
        </Routes>
      </Router>
      {/* <AllQuizPage /> */}
    </div>
  );
}

export default App;
