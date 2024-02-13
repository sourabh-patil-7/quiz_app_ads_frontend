import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "times new roman",
        color: "rgb(4, 77, 95)",
      }}
    >
      <h1 style={{ fontFamily: "times new roman" }}>Login As Student</h1>
      <div className="studentLogin">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.studentId.value);
            axios
              .post("http://localhost:5000/login/student", {
                user_id: event.target.studentId.value,
                password: event.target.password.value,
              })
              .then((res) => {
                console.log("Res", res);
                navigate("/AllQuizPage");
              })
              .catch((err) => {
                alert("Invalid Credentials");
                console.log("Err", err);
              });
          }}
        >
          <h3 className="studentLoginH3">Student ID :</h3>
          <input type="text" name="studentId" />
          <br />
          <h3 className="studentLoginH3">Password</h3>
          <input type="password" name="password" />
          <br />
          <button className="studentLoginButton" type="submit">
            Submit
          </button>
        </form>
      </div>
      <hr style={{ height: "10px" }} />
      <h1 style={{ fontFamily: "verdana" }}>Login As Faculty</h1>
      <div className="facultyLogin">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(event.target.facultyId.value);
            axios
              .post("http://localhost:5000/login/faculty", {
                user_id: event.target.facultyId.value,
                password: event.target.password.value,
              })
              .then((res) => {
                console.log("Res", res);
                navigate("/TeacherViewNew");
              })
              .catch((err) => {
                alert("Invalid Credentials");
                console.log("Err", err);
              });
          }}
        >
          <h3 className="facultyLoginH3">Faculty ID :</h3>
          <input type="text" name="facultyId" />
          <br />
          <h3 className="facultyLoginH3">Password</h3>
          <input type="password" name="password" />
          <br />
          <button className="facultyLoginButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
