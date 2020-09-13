import React from 'react';

import Meta from 'components/Meta';
import Container from '@material-ui/core/Container';

import PublishProcess from 'sections/PublishProcess';

import useStyles from './styles';

function Publish() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="TBD"
        description="TBD"
      />
      <Container maxWidth="md" className={classes.root}>
        <PublishProcess />
      </Container>
    </>
  );
}

export default Publish;
