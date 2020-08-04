import React, { Component } from "react";
import brewivery from "./images/brewivery.gif";
export default class Projects extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ color: "#ffff", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-12">
            <h1
              style={{ color: "#ffff", fontFamily: "Bebas Neue", fontSize: 60 }}
            >
              Project
            </h1>
            <hr className="lineBreak" />
          </div>
          <div className="col-md-12">
            <h1 style={{ fontFamily: "Courier New" }}>Brewivery</h1>
            <h5 style={{ color: "#b3294e" }}> Lead Developer</h5>
          </div>
          <div
            className="col-md-6"
            style={{ textAlign: "left", paddingTop: "10%" }}
          >
            <h5>Full Stack MERN application designed for a delivery service</h5>
            <h6>
              Web Tools: Javascript (ES6), React, MongoDB, Mongoose, Express,
              Node.js,Axios, Passport
            </h6>
            <h6>Role Snapshot: </h6>
            <ul class="list-group">
              <li class="list-group-item">
                Created and designed layout and functionality of UI using React
                and bootstrap.
              </li>
              <li class="list-group-item">
                Mapped out back end functionality using Express and Node
              </li>
              <li class="list-group-item">
                Optimized routing to listen to Http requests and interactions
                with the MongDB database.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={brewivery} alt="" />
          </div>
        </div>
        <hr className="lineBreak" />
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <a href="https://github.com/cgraves09/Brewivery">
              <i
                style={{ color: "#ffff", fontSize: 40, padding: 0 }}
                class="fab fa-github"
              ></i>
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://brewivery.herokuapp.com/">
              <i
                style={{
                  color: "#ffff",
                  fontSize: 40,
                  padding: 0,
                  hover: "text-decoration: underline",
                }}
                class="far fa-file"
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
