import React from "react";

function Button({
  type,
  value,
  name,
  className,
  onClick: onclickHandler,
  loading,
  children,
}) {
  return (
    <button
      onClick={onclickHandler}
      type={type}
      name={name}
      value={value}
      className={className}
    >
      {loading ? (
        <div className="spinner-grow text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
