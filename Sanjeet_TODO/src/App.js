import React from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="col">
      <div className="col-md-8 offset-md-2">
        <Todos />
      </div>
    </div>
  );
}

export default App;

