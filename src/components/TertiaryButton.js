import React from "react";

function TertiaryButton({ title, className, clickMe }) {
  return (
    <button className={className} onClick={clickMe}>
      {title}
    </button>
  );
}

export default TertiaryButton;
