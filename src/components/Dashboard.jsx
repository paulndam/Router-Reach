import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = (props) => {
  console.log(props);
  console.log("******************");
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="row">
          <div className="col">
            <div id="cardtwo" class="card  text-white bg-dark mb-3">
              <div class="card-header">Your Form Data</div>
              <div class="card-body">
                <h5 class="card-title">...</h5>
                <p class="card-text">
                  {props.info.map((firstname, lastname, email, password, i) => (
                    <p key={i}>{firstname}</p>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
