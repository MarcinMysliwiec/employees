import React from 'react';

const Header = ({ children, appendElement }) => {
  return (
    <div className="header">
      <h2>{children}</h2>
      {appendElement}
    </div>
  );
};

export default Header;
