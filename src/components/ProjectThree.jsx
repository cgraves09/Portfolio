import React, { Component } from "react";
import food from "./images/food.gif";
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
              Chicken Tender — Lead Developer
            </h2>
            <hr className="lineBreak" />
            <h5>A powerful solution to find a place to eat.</h5>
            <h6>
              Web Tools: HTML5, CSS, JAVASCRIPT, JQUERY, FIREBASE, AJAX/API
            </h6>
            <h6>Role Snapshot: </h6>
            <ul class="list-group">
              <li class="list-group-item">
                Created Api calls to Yelp for restaurant information and Google
                maps api for map locations.
              </li>
              <li class="list-group-item">
                Firebase database to hold users choices to determine a final
                restaurant choice.
              </li>
              <li class="list-group-item">
                JQUERY for DOM manipulation to handle users choices.
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-fluid" src={food} alt="" />
          </div>
        </div>
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-6" style={{ textAlign: "center" }}>
            <a href="https://github.com/cgraves09/chickenTender">
              <i
                style={{ color: "#ffff", fontSize: 40, padding: 0 }}
                class="fab fa-github"
              ></i>
            </a>
          </div>
          <div className="col-md-6">
            <a href="https://cgraves09.github.io/chickenTender/">
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
