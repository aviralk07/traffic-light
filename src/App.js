import "./App.css";
import React, { useState, usestate } from "react";
import Light from "./Light";

function App() {
  const colors = ["red", "yellow", "green"];
  const [lit, setlit] = useState("red");
  return (
    <div className="App">
      {colors.map((color) => {
        return <Light color={color} lit={lit} setLit={setlit} />;
      })}
    </div>
  );
}

export default App;
