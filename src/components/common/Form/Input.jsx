import React from "react";

function Input({
  name,
  className,
  type,
  value,
  placeholder,
  onChange: onChangeHandler,
}) {
  return (
    <input
      name={name}
      className={className}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default Input;