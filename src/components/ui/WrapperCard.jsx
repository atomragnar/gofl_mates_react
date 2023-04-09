import React from 'react';

import './Card.css';

const WrapperCard = (props) => {
  const classes = 'card ' + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default WrapperCard;
