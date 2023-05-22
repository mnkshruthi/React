import React from "react";

export const Greet = ({ name, firstName, lastName, children }) => {
  return (
    <div>
      <h1>
        {name} {firstName}
        {lastName}
        {children}
      </h1>
    </div>
  );
};

//export default Greet;
