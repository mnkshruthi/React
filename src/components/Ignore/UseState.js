import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("red");
  function decrementCount() {
    setCount((Prevcount) => Prevcount - 1);
    setTheme("blue");
  }

  function incrementCount() {
    setCount((PrevCount) => PrevCount + 1);
    setTheme("Yellow");
  }
  return (
    <div className="App">
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default UseState;
