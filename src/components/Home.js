import React, { Component } from "react";
import HeadSection from "./HeadSection.jsx";
import FeatureSection from "./FeatureSection.jsx";
import ProjectOne from "./ProjectOne.jsx";
import ProjectTwo from "./ProjectTwo.jsx";
import ProjectThree from "./ProjectThree.jsx";
import Contact from "./Contact.jsx";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const slider = (
  <AwesomeSlider className="container" animation="cubeAnimation">
    <div className="test" style={{ backgroundColor: "	#000000" }}>
      <HeadSection />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <FeatureSection />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectOne />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectTwo />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectThree />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <Contact />
    </div>
  </AwesomeSlider>
);
const mobile = (
  <div>
    <div style={{ backgroundColor: "	#000000" }}>
      <HeadSection />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <FeatureSection />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectOne />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectTwo />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <ProjectThree />
    </div>
    <div style={{ backgroundColor: "	#000000" }}>
      <Contact />
    </div>
  </div>
);
let div;
export default class Home extends Component {
  render() {
    if (window.innerWidth <= 800) {
      div = mobile;
    } else {
      div = slider;
    }
    return <div>{div}</div>;
  }
}
