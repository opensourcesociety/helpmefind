import React from 'react';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import { FaUser as UserIcon } from 'react-icons/fa';

import Fb from 'components/Fb';
import Logo from '../common/Logo';

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
      <Fb row justifyBetween>
        <Fb column justifyBetween>
          <Fb justifyCenter alignCenter grow className={classes.image}><UserIcon /></Fb>
          <Box>[*][*][*][*][*]</Box>
        </Fb>
        <Fb column>
          <Fb>
            <Box>1</Box>
            <Box>surename</Box>
          </Fb>
          <Fb>
            <Box>2</Box>
            <Box>name</Box>
          </Fb>
          <Fb>
            <Box>3</Box>
            <Box>birth place</Box>
          </Fb>
          <Fb>
            <Fb>
              <Box>4a</Box>
              <Box>daate</Box>
            </Fb>
            <Fb>
              <Box>4b</Box>
              <Box>daate</Box>
            </Fb>
          </Fb>
          <Fb>
            <Box>4c</Box>
            <Box>AP</Box>
          </Fb>
          <Fb>
            <Box>4d</Box>
            <Box>Armenia</Box>
          </Fb>
        </Fb>
        <Fb column justifyBetween>
          <Logo />
          ****
        </Fb>
      </Fb>
      <Box className={classes.footer} />
    </Paper>
  );
}

export default DrivingLicense;
