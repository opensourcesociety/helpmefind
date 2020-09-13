import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Fb from 'components/Fb';

import Stepper from './components/Stepper';
import Content from './components/Content';
import Controller from './components/Controller';

import { publishSteps as steps } from 'config';

import useStyles from './styles';

function PublishProcess() {
  const classes = useStyles();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const [publishedId] = useState(null);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleGoToPost = () => {
    history.push(`/posts/${publishedId}`);
  };

  return (
    <Fb justifyAround column className={classes.root}>
      <Stepper steps={steps} activeStep={activeStep} />
      <Content />
      <Controller
        steps={steps}
        activeStep={activeStep}
        onBack={handleBack}
        onNext={handleNext}
        onGoToPost={handleGoToPost}
      />
    </Fb>
  );
}

export default PublishProcess;
