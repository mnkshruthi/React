import React from "react";

export default function Button({ title, type, onClick }) {
  switch (type) {
    case "Secondary":
      return (
        <button onClick={onClick} className="secondary">
          {title}
        </button>
      );
    case "Danger":
      return (
        <button onClick={onClick} className="danger">
          {title}
        </button>
      );
    case "icon":
      return (
        <button onClick={onClick} className="icon">
          {title}
        </button>
      );
    case "Pill":
      return (
        <button onClick={onClick} className="pill">
          {title}
        </button>
      );
    case "Ghost":
      return (
        <button onClick={onClick} className="ghost">
          {title}
        </button>
      );
    default:
      return (
        <button onClick={onClick} className="default">
          {title}
        </button>
      );
  }
}
