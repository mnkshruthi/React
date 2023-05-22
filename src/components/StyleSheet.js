import React from "react";
import "./myStyles.css";

function StyleSheet(props) {
  let className = props.primary ? "orange" : " ";
  return (
    <div>
      <h1 className={className}>StyleSheets</h1>
    </div>
  );
}

export default StyleSheet;
