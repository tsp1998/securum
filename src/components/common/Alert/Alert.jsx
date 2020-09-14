import React from "react";

function Alert({ className, children }) {
  return (
    <div className={`alert alert-dismissible ${className}`}>
      {/* <button type="button" className="close" data-dismiss="alert">
        &times;
      </button> */}
      {children}
    </div>
  );
}

export default Alert;
