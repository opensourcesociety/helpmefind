import React from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Fb from 'components/Fb';
import Meta from 'components/Meta';
import Table from 'components/Table';
import { Link as RouterLink, useHistory } from 'react-router-dom';

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
  const [posts] = usePosts();
  const history = useHistory();

  function navigateToPost({ id }) {
    history.push(`posts/${id}`);
  }

  return (
    <>
      <Meta
        title="Օգնեք գտնել"
        description="Օգնեք գտնել"
      />
      <Container maxWidth="md" className={classes.root}>
        <Fb row justifyBetween className={classes.titleRow}>
          <Typography variant="h4">
            Օգնեք գտնեմ
          </Typography>

          <Button 
            variant="outlined"
            component={RouterLink}
            to="/posts/new"
          >
            Ավելացնել Հայտարարություն
          </Button>
        </Fb>
       
        <Table
          data={posts}
          columns={columns}
          onRowClick={navigateToPost}
        />
      </Container>
    </>
  );
}

export default Welcome;
