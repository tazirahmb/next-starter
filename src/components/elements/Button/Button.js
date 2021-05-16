import React from 'react';
import { any, object } from 'prop-types';

const Button = ({ children, style, ...rest }) => (
  <button
    style={{
      backgroundColor: 'teal',
      border: 'none',
      color: 'white',
      padding: '0 16px',
      height: 32,
      minWidth: 100,
      borderRadius: 4,
      fontWeight: 'bold',
      ...style,
    }}
    {...rest}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: any,
  style: object,
};

export default Button;
