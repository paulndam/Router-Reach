import React, { useState, useEffect } from "react";
import { Router, link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RegisterandLogin from "./components/RegisterandLogin.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [firstname, setfirstname] = useState("firstname");
  const [firstnameError, setfirstnameError] = useState("");

  const [lastname, setlastname] = useState("lastname");
  const [lastnameError, setlastnameError] = useState("");

  const [email, setemail] = useState("email");
  const [emailError, setemailError] = useState("");

  const [password, setpassword] = useState("password");
  const [passwordError, setpasswordError] = useState("");

  const addUser = (user) => {
    setfirstname(user.firstname);
    setlastname(user.lastname);
    setemail(user.email);
    setpassword(user.password);
  };
  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <h2>Blue Sports</h2>
      </div>

      <div className="row">
        <div className="col-fluid">
          <link to="/registration&login"></link>
          <Router>
            <RegisterandLogin addUser={addUser} path="/" />
            <Dashboard
              info={[firstname, lastname, email, password]}
              path="/dashboard/:id"
            />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
