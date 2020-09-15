import React from 'react';

import Fb from 'components/Fb';

import useStyles from './styles';

function Logo() {
  const classes = useStyles();

  return (
    <Fb className={classes.root}>
      Logo
    </Fb>
  );
}

export default Logo;
