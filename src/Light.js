import React from "react";

const Light = ({ color, light, setLight }) => {
  return (
    <div>
      <div
        className="light"
        style={{ backgroundColor: color === light ? color : "grey" }}
        onClick={() => setLight(color)}
      ></div>
    </div>
  );
};
export default Light;
