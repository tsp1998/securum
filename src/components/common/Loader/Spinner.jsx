import React from "react";

function Spinner({ className }) {
  return (
    <div>
      <div className={`spinner-border ${className}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
