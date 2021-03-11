import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import Assessments from "./Assessments";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/assessments" component={Assessments} />
    </div>
  );
}

export default App;
