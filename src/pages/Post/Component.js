import React from 'react';

import Meta from 'components/Meta';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

function Post() {
  const classes = useStyles();

  return (
    <>
      <Meta
        title="TBD"
        description="TBD"
      />
      <Container maxWidth="md" className={classes.root}>
        post
      </Container>
    </>
  );
}

export default Post;
