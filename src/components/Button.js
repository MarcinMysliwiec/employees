import React from 'react';

const Button = ({ children = '', disabled = false, onClick }) => {
  return (
    <button className="btn" disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
