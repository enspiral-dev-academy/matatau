import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import logo from './logo.svg';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <h1>Welcome home</h1>
        <Link to="/assessments">Go to assessments</Link>
      </header>
    </div>
  );
}

export default Home;
