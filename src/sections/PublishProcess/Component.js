import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Fb from 'components/Fb';

import Stepper from './Stepper';
import LostOrFound from './LostOrFound';
import Documents from './Documents';
import Form from './Form';
import Contacts from './Contacts';
import Finish from './Finish';
import Controller from './Controller';

import { publishSteps as steps } from 'config';

import useStyles from './styles';

function PublishProcess() {
  const classes = useStyles();
  const history = useHistory();

  const [activeStep, setActiveStep] = useState(0);
  const [publishType, setPublishType] = useState('lost');
  const [documentType, setDocumentType] = useState(null);
  const [publishedId] = useState(null);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleGoToPost() {
    history.push(`/posts/${publishedId}`);
  }

  function handlePublishTypeChange(type) {
    setPublishType(type);
  }

  function handleDocumentTypeChange(type) {
    setDocumentType(type);
  }

  function handleFormSubmit() {
    // TBD
  }

  function handleContactsSubmit() {
    // TBD
  }

  function getContent() {
    switch(activeStep) {
      case 0: return <LostOrFound value={publishType} onChange={handlePublishTypeChange} />;
      case 1: return <Documents value={documentType} onChange={handleDocumentTypeChange} />;
      case 2: return <Form documentType={documentType} onSubmit={handleFormSubmit} />;
      case 3: return <Contacts onSubmit={handleContactsSubmit} />;
      case 4: return <Finish />;
      default: return null;
    }
  }

  return (
    <Fb justifyAround column className={classes.root}>
      <Stepper
        steps={steps}
        activeStep={activeStep}
      />
      <div className={classes.content}>
        {getContent()}
      </div>
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
