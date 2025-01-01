import React from 'react';

const Button = ({ ClickHandler, ct }) => {
  return <button onClick={ClickHandler}>Details & count: {ct}</button>;
};

export default Button;
