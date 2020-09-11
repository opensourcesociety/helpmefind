import React, { useCallback, useState } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Fb from 'components/Fb';
import Meta from 'components/Meta';
import Table from 'components/Table';
import Dialog from 'components/Dialog';

import { usePosts } from 'store/firebase';

import DialogContent from './DialogContent';

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
  const [activePost, setActivePost] = useState(null);
  const [posts] = usePosts();

  const onPostSelect = useCallback(post => {
    setActivePost(post);
    setIsDialogOpen(true);
  }, [setActivePost, setIsDialogOpen]);

  const onDialogClose = useCallback(post => {
    setActivePost(null);
    setIsDialogOpen(false);
  }, [setActivePost, setIsDialogOpen]);

  return (
    <>
      <Meta
        title="Welcome"
        description="Welcome to React PWA"
      />
      <Container maxWidth="md" className={classes.root}>
        <Fb row justifyBetween className={classes.titleRow}>
          <Typography variant="h4">
            Օգնեք գտնեմ
          </Typography>

          <Button 
            variant="outlined"
            onClick={() => setIsDialogOpen(true)}
          >
            Ավելացնել Հայտարարություն
          </Button>
        </Fb>
       
        <Table
          data={posts}
          columns={columns}
          onRowClick={onPostSelect}
        />

        <Dialog
          open={isDialogOpen}
          title={activePost && activePost.title}
          onClose={onDialogClose}
        >
          {activePost && (
            <DialogContent
              post={activePost}
            />
          )}
        </Dialog>
      </Container>
    </>
  );
}

export default Welcome;
