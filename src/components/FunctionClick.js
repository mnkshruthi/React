// import React from "react";

// function FunctionClick() {
//   const clickHandler = () => {
//     console.log("Button Clicked");
//   };
//   return <button onClick={clickHandler}>Click</button>;
// }

// export default FunctionClick;

import React from "react";

function FunctionClick() {
  const clickHandler = () => {
    "You Clicked Me";
  };
  return <button onClick={clickHandler}>Click Me</button>;
}

export default FunctionClick;
