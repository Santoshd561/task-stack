import React from "react";
import "./App.css";
import { Route, Switch, Redirect, Router, useHistory } from "react-router-dom";
import Home from "./Components/Containers/Home";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
