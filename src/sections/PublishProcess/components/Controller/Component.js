import React from 'react';

import Fb from 'components/Fb';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function Controller({ activeStep, onGoToPost, onNext, onBack, steps }) {
  const classes = useStyles();

  return (
    <div>
      {activeStep === steps.length ? (
        <Fb row alignCenter>
          <Typography className={classes.doneNote}>Հրապարակված է</Typography>
          <Button onClick={onGoToPost}>Տեսնել հրապարակումը</Button>
        </Fb>
      ) : (
        <div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={onBack}
              className={classes.backButton}
            >
              Հետ
            </Button>
            <Button variant="contained" color="primary" onClick={onNext}>
              {activeStep === steps.length - 1 ? 'Հրապարակել' : 'Հաջորդը'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Controller;
