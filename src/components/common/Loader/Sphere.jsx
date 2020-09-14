import React from "react";

function Sphere({ className }) {
  return (
    <div>
      <div className={`spinner-grow ${className}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Sphere;
