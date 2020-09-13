import React from 'react';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Fb from 'components/Fb';

import useStyles from './styles';

function DrivingLicense() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Fb justifyCenter column className={classes.header}>
        <Box className={classes.divider} />
        <Fb alignCenter justifyCenter className={classes.country}>AM</Fb>
        <Fb column justifyBetween alignEnd className={classes.languages}>
          <Fb justifyEnd className={classes.upper}>
            <Box>վարորդական վկայակաան</Box>
            <Box>driving license</Box>
          </Fb>
          <Fb justifyEnd className={classes.lower}>
            <Box>водительское удостоверение</Box>
            <Box>permis de conduire</Box>
          </Fb>
        </Fb>
      </Fb>
      Driving License
      <Box className={classes.footer} />
    </Paper>
  );
}

export default DrivingLicense;
