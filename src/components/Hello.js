import React from "react";

const Hello = () => {
  //return <div>Content</div>;
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Shruthi")
  );
};

export default Hello;
