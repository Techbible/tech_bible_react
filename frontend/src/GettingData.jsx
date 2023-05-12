import React, { useState, useEffect } from "react";

function GettingData() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mongo-tools")
      .then((response) => response.json())
      .then((data) => setTools(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="mt-10">
      <h1>Tools List</h1>
      <ul>
        {tools.map((tool) => (
          <li key={tool._id}>
            <h2>{tool.Name}</h2>
            <br />
            <h2>{tool.Description}</h2>
            <br />
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GettingData;
