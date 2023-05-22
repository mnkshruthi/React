import React, { useState, useEffect } from "react";

export const AUseState = () => {
  const [resourceType, setresourceType] = useState("posts");
  useEffect(() => {
    console.log("Render");
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setresourceType("posts")}>Posts</button>
        <button onClick={() => setresourceType("Users")}>Users</button>
        <button onClick={() => setresourceType("Comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
};
