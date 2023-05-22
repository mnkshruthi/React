import React from "react";

function PrimaryButton({ Primary, onClick, title }) {
  return (
    <button className={Primary} onClick={onClick}>
      {title}
    </button>
  );
}

export default PrimaryButton;
