import React, { Component } from "react";
import robot from "./images/robot.gif";
export default class Projects extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ color: "#ffff", textAlign: "center" }}
      >
        <div className="row">
          <div className="col-md-12">
            <h1 style={{ color: "#b3294e", fontFamily: "Bebas Neue" }}>
              Project
            </h1>
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h2 style={{ fontFamily: "Bebas Neue" }}>
              Crypto Bot — Lead Developer
            </h2>
            <hr className="lineBreak" />
            <h5>
              Node.js application to automate trading of cryptocurrencies.
            </h5>
            <h6>Web Tools: Javascript (ES6), Axios, Node.js, Npm Packages</h6>
            <h6>Role Snapshot: </h6>
            <ul class="list-group">
              <li class="list-group-item">
                Created an algorithmic trading schema for linking to exchange to
                automate buying and selling .
              </li>
              <li class="list-group-item">
                Used API keys to link exchanges to streamline trading within
                seconds of axios request.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={robot} alt="" />
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <a href="https://github.com/cgraves09/cryptoBot">
              <i
                style={{ color: "#ffff", fontSize: 40, padding: 0 }}
                class="fab fa-github"
              ></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
