import React from "react";
import * as serviceWorker from "./serviceWorker";
import Home from "./components/Home.js";
import HeadSection from "./components/HeadSection.jsx";

function App() {
  return <Home />;
}

serviceWorker.register();

export default App;
