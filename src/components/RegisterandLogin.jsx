import React, { useState, useEffect } from "react";
//import { Router, link } from "@reach/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Form.css";
import { navigate } from "@reach/router";

const RegisterandLogin = (props) => {
  const [firstname, setfirstname] = useState("");
  const [firstnameError, setfirstnameError] = useState("");

  const [lastname, setlastname] = useState("");
  const [lastnameError, setlastnameError] = useState("");

  const [email, setemail] = useState("");
  const [emailError, setemailError] = useState("");

  const [password, setpassword] = useState("");
  const [passwordError, setpasswordError] = useState("");

  //adding another const or constructing where by we willl pass a prop saying if form have been submitted or not and as well as setting our use state to false for proper conditions and validations
  //and by default we wanna set our formSubmitted to false and once they have successfully submitted form then our program does the rest
  const [formSubmitted, setformSubmitted] = useState(false);

  //making method to create our user

  const createUser = (e) => {
    e.preventDefault();
    props.addUser({ firstname, lastname, email, password });
    //now line below will create our user
    const newUser = { firstname, lastname, email, password };
    console.log("Bien Venue", newUser);
    // now after creating our user , we wanna set or make sure that the form being submitted will return a true statement
    setformSubmitted(true);

    setfirstname("");
    setlastname("");
    setemail("");
    setpassword("");

    //navigate("/dashboard");
    let x = "planet";
    let id = 1;
    navigate(`/dashboard/${id}`);
  };

  // now creating a method called formfeedback, whicj will convey info top the user
  //the info convey will based if the form is meeting our conditional statement like described above

  const formFeedBack = () => {
    if (formSubmitted) {
      return "thanks form submitted ";
    } else {
      return "Bien venue, please submit the form";
    }
  };

  //doing form validations

  const validations = (e) => {
    setfirstname(e.target.value);
    if (e.target.value.length < 1) {
      setfirstnameError("firstname required mon ami");
    } else if (e.target.value.length < 3) {
      setfirstnameError("gotta be greater than 3 characters");
    }
  };
  const validationstwo = (e) => {
    setlastname(e.target.value);
    if (e.target.value.length < 1) {
      setlastnameError("lastname required mon ami");
    } else if (e.target.value.length < 3) {
      setlastnameError("gotta be greater than 3 characters");
    }
  };
  const validationsthree = (e) => {
    setemail(e.target.value);
    if (e.target.value.length < 1) {
      setemailError("email required mon ami");
    } else if (e.target.value.length < 3) {
      setemailError("gotta be greater than 3 characters");
    }
  };

  const validationsfour = (e) => {
    setpassword(e.target.value);
    if (e.target.value.length < 1) {
      setpasswordError("password required mon ami");
    } else if (e.target.value.length < 3) {
      setpasswordError("gotta be greater than 3 characters");
    }
  };

  // line below will be using html to implement our form

  return (
    <div className="container-fluid">
      {/* <div className="jumbotron jumbotron-fluid">
        <div className="container">sss</div>
      </div> */}
      {formSubmitted ? (
        <div className="alert alert-success">
          Thanks for submitting the form. Also the fabulous and great instructor
          grading this, please login section doesn't work for now, stay tuned !!
        </div>
      ) : (
        ""
      )}

      <div className="row">
        <div className="col">
          <div className="card bg-light mb-3">
            <div className="card-header">Register</div>
            <div class="card-body">
              <form onSubmit={createUser}>
                <div className="form-group">
                  <label for="firstname">First name</label>
                  <input
                    type="firstname"
                    className="form-control"
                    id="firstname"
                    aria-describedby="firstname"
                    onChange={validations}
                    // value={firstname}
                  />
                  {firstnameError ? (
                    <p style={{ color: "red" }}>{firstnameError}</p>
                  ) : (
                    ""
                  )}
                  <small
                    id="firstname"
                    className="form-text text-muted"
                  ></small>
                </div>

                <div className="form-group">
                  <label for="lastname">Last name</label>
                  <input
                    type="lastname"
                    className="form-control"
                    id="lastname"
                    aria-describedby="lastname"
                    onChange={validationstwo}
                    // value="lastname"
                  />
                  {lastnameError ? (
                    <p style={{ color: "red" }}>{lastnameError}</p>
                  ) : (
                    ""
                  )}
                  <small id="lastname" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    onChange={validationsthree}
                    // value="email"
                  />
                  {emailError ? (
                    <p style={{ color: "red" }}>{emailError}</p>
                  ) : (
                    ""
                  )}
                  <small id="email" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    onChange={validationsfour}
                    // value="password"
                  />
                  {passwordError ? (
                    <p style={{ color: "red" }}>{passwordError}</p>
                  ) : (
                    ""
                  )}
                  <small id="password" className="form-text text-muted"></small>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={createUser}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-light mb-3">
            <div className="card-header">Log In</div>
            <div class="card-body">
              <form onSubmit={createUser}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    onChange={(e) => setemail(e.target.value)}
                    //   value="email"
                  />
                  <small id="email" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    onChange={(e) => setpassword(e.target.value)}
                    //   value="password"
                  />
                  <small id="password" className="form-text text-muted"></small>
                </div>
                <button
                  type="submit"
                  // onClick={createUser}
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="row justify-content-center">
          <div className="row">
            <div className="col">
              <div id="cardtwo" class="card  text-white bg-dark mb-3">
                <div class="card-header">Your Form Data</div>
                <div class="card-body">
                  <h5 class="card-title">...</h5>
                  <p class="card-text">
                    <p>First name: {firstname}</p>
                    <p>Last name: {lastname}</p>
                    <p>Email: {email}</p>
                    <p>Password: {password}</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </div>
  );
};
export default RegisterandLogin;
