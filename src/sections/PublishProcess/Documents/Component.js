import React from 'react';

import GridList from '@material-ui/core/GridList';

import DrivingLicense from './DrivingLicense';
import Passport from './Passport';
import Other from './Other';

import useStyles from './styles';

function Documents() {
  const classes = useStyles();

  return (
    <GridList cellHeight={100} className={classes.root}>
      <Passport />
      <DrivingLicense />
      <Other />
    </GridList>
  );
}

export default Documents;
