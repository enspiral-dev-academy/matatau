import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to Matatau!</p>
      </header>
    </div>
  );
}

export default App;
