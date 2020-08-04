import React, { Component } from "react";
import htmlGif from "./images/html.gif";
import serverGif from "./images/server.gif";
import toolsGif from "./images/tools.gif";
import WaveBorder from "../shared/components/WaveBorder";
import "../index.css";

export default class FeatureSection extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000000", color: "#ffff" }}>
        <WaveBorder
          upperColor="#b3294e"
          lowerColor="#000000"
          animationNegativeDelay={4}
        />
        <div
          className="container"
          style={{ textAlign: "center", fontFamily: "Bebas Neue" }}
        >
          <h3
            style={{
              color: "#b3294e",
              paddingTop: "15px",
            }}
          >
            Who am I?
          </h3>
          <h3>
            A versatile Full Stack Web Developer with 3+ years of front-end
            development and a passion for MERN Stack Development. Infatuated
            about coding and learning new libraries, with a problem solving
            mindset.
          </h3>
        </div>

        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-md-4">
            <img src={htmlGif} height="100px" width="100px" alt="" />
            <h1 style={{ textAlign: "center", fontFamily: "Bebas Neue" }}>
              Front-end Skills:
            </h1>
            <ul
              className="list-group"
              style={{ color: "#ffff", fontFamily: "Bebas Neue" }}
            >
              <li className="list-group-item">Html</li>
              <li className="list-group-item">CSS</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">CSS Animations</li>
              <li className="list-group-item">React</li>
              <li className="list-group-item">Javascript</li>
              <li className="list-group-item">Jquery</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={serverGif} height="100px" width="100px" alt="" />
            <h1>Back-end Skills:</h1>
            <ul
              className="list-group"
              style={{ color: "#ffff", listStyle: "none" }}
            >
              <li className="list-group-item">Node.js</li>
              <li className="list-group-item">MongoDB</li>
              <li className="list-group-item">MySql</li>
              <li className="list-group-item">Express</li>
              <li className="list-group-item">Ajax & API Routing</li>
              <li className="list-group-item">NPM</li>
            </ul>
          </div>
          <div className="col-md-4">
            <img src={toolsGif} height="100px" width="100px" alt="" />
            <h1>Dev Tools:</h1>
            <ul className="list-group" style={{ color: "#ffff" }}>
              <li className="list-group-item">Visual Studio Code</li>
              <li className="list-group-item">Github</li>
              <li className="list-group-item">Heroku</li>
              <li className="list-group-item">Terminal</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
