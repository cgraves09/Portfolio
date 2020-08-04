import React, { Fragment } from "react";
import PropTypes from "prop-types";
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
  <AwesomeSlider
    style={{ backgroundColor: "	#000000" }}
    animation="cubeAnimation"
  >
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <HeadSection />
    </Fragment>
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <FeatureSection />
    </Fragment>
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <ProjectOne />
    </Fragment>
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <ProjectTwo />
    </Fragment>
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <ProjectThree />
    </Fragment>
    <Fragment style={{ backgroundColor: "	#000000" }}>
      <Contact />
    </Fragment>
  </AwesomeSlider>
);
function Home(props) {
  return <div>{slider}</div>;
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
