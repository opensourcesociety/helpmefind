import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Meta from 'components/Meta';
import Table from 'components/Table';
import Dialog from 'components/Dialog';

import { usePosts } from 'store/firebase';

import useStyles from './styles';

const columns = [
  {
    label: 'title',
    name: 'title',
  },
];

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 600px)');
  const classes = useStyles({ isSmallScreen: matchSmallScreen });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [posts] = usePosts();

  return (
    <>
      <Meta
        title="Welcome"
        description="Welcome to React PWA"
      />
      <Container maxWidth="md" className={classes.root}>
        <Typography variant="h4">
          Help me find
        </Typography>
        <Table
          data={posts}
          columns={columns}
          onRowClick={() => setIsDialogOpen(true)}
        />

        <Dialog
          open={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        >
          The Dialog
        </Dialog>
      </Container>
    </>
  );
}

export default Welcome;
