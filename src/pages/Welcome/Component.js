import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Meta from 'components/Meta';
import Table from 'components/Table';
import Dialog from 'components/Dialog';

import useStyles from './styles';

const rows = [
  {
    id: 1,
    name: 'Test',
  },
  {
    id: 2,
    name: 'Test 2',
  },
];

const columns = [
  {
    label: 'ID',
    name: 'id',
  },
  {
    label: 'Label',
    name: 'name',
  }
];

function Welcome() {
  const matchSmallScreen = useMediaQuery('(max-width: 600px)');
  const classes = useStyles({ isSmallScreen: matchSmallScreen });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
          data={rows}
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
