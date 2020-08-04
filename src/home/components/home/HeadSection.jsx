import React, { Component } from "react";
import Typical from "react-typical";
import markerImage from "../images/marker.gif";

export default class HeadSection extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="box-area">
            <div className="box1">
              <h1 style={{ lineHeight: 5 }}>Javascript</h1>
            </div>
            <div className="box2">
              <h1 style={{ lineHeight: 5 }}>React</h1>
            </div>
            <div className="box3">
              <h1 style={{ lineHeight: 5 }}>Node.js</h1>
            </div>
            <div className="box4">
              <h1 style={{ lineHeight: 5 }}>MongoDb</h1>
            </div>
            <div className="box5">
              <h1 style={{ lineHeight: 5 }}>CSS</h1>
            </div>
            <div className="box6">
              <h1 style={{ lineHeight: 5 }}>Express</h1>
            </div>
          </div>
        </div>
        <h1
          style={{ color: "#ffff", fontSize: "50px", fontFamily: "Bebas Neue" }}
        >
          Christopher Graves
        </h1>
        <h5
          style={{
            color: "#b3294e",
            textAlign: "center",
            fontFamily: "Courier New, Courier, monospace",
          }}
        >
          <Typical
            steps={[
              "Full Stack Developer",
              1000,
              "Problem Solver",
              1000,
              "Forever Student",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h5>
        <h5 style={{ color: "#ffff", textAlign: "center" }}>
          <span>
            <img src={markerImage} alt="" height="50px" width="50px" />
          </span>
          Boca Raton
        </h5>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-4" style={{ textAlign: "center" }}>
            <a href="https://github.com/cgraves09">
              <i
                style={{ color: "#ffff", fontSize: 40, padding: 0 }}
                class="fab fa-github"
              ></i>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/christopher-graves-80a41418a/">
              <i
                style={{ color: "#ffff", fontSize: 40, padding: 0 }}
                class="fab fa-linkedin-in"
              ></i>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://docs.google.com/document/d/1kMNceN-WWO9TyIQhAYiLsQUmstQNcVAA7dWq3bF7v-M/edit">
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
