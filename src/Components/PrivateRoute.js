import React from "react";

const Privateroute = ({ children }) => {
  if (localStorage.getItem("loggedin")) {
    if (localStorage.getItem("loggedin") == "false") {
      return (
        <div
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            color: "red",
          }}
        >
          Not Logged In
        </div>
      );
    } else return <div>{children}</div>;
  } else {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          color: "red",
        }}
      >
        Not Logged In
      </div>
    );
  }
};

export default Privateroute;
