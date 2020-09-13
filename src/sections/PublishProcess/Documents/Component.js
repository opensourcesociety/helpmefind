import React from 'react';

import GridList from '@material-ui/core/GridList';

import { documentTypes } from 'config';
import useStyles from './styles';

function Documents() {
  const classes = useStyles();

  return (
    <GridList cellHeight={100} className={classes.root}>
      {
        documentTypes.map(doc => (
          <div key={doc.type}>{doc.type}</div>
        ))
      }
    </GridList>
  );
}

export default Documents;
