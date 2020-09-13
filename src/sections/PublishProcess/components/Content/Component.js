import React from 'react';

import useStyles from './styles';

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Something
    </div>
  );
}

export default Content;
