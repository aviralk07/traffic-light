import "./App.css";
import React, { useState } from "react";
import Light from "./Light";

function App() {
  const colors = ["red", "yellow", "green"];
  const [light, setLight] = useState("");
  return (
    <div className="App">
      {colors.map((color) => {
        return <Light color={color} light={light} setLight={setLight} />;
      })}
    </div>
  );
}

export default App;
