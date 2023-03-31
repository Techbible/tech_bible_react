import React from "react";
import { Navbar } from "../../layouts";
import "../../assets/addTool.css";

function AddTool() {
  return (
    <div className="home-page-SPw">
      <Navbar />

      <div className="addTools-wrapper">
        <div className="form">
          <h1>Add a Tool</h1>
          <input type="file" />
          <input type="text" placeholder="Tool Name (Canvas, Adobe XD..)" />
          <input type="text" placeholder="Price" />
          <textarea>The tool's description</textarea>
          <button>+ Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddTool;
