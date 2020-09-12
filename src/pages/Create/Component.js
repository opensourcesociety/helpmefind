import React from 'react';

import Meta from 'components/Meta';
import Container from '@material-ui/core/Container';

import Form from './Form';

import useStyles from './styles';

function Create() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="TBD"
        description="TBD"
      />
      <Container maxWidth="md" className={classes.root}>
        <Form />
      </Container>
    </>
  );
}

export default Create;
