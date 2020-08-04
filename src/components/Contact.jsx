import React, { Component } from "react";
import selfImg from "./images/Self.jpg";

export default class HeadSection extends Component {
  render() {
    return (
      <div
        className="container"
        style={{ color: "#ffff", textAlign: "center" }}
      >
        <img
          className="img-thumbnail"
          src={selfImg}
          alt=""
          height="200px"
          width="200px"
          style={{ borderRadius: "50%" }}
        />
        <h1 style={{ fontFamily: "Bebas Neue" }}>
          Eager to Join a Team and Build Something Amazing!
        </h1>
        <h3 style={{ fontFamily: "Bebas Neue" }}>Feel free to connect</h3>
        <p>christopher.graves09@gmail.com</p>
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
