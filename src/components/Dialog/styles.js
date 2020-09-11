import { makeStyles } from '@material-ui/core/styles';

const headerHeight = 42;
export default makeStyles(theme => ({
  dialogTileWrapper: {
    minHeight: 40,
    position: 'relative',
    height: headerHeight,
    padding: '0.5rem 1rem',
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.background.default}`,
    [theme.breakpoints.down('xs')]: {
      height: headerHeight,
      padding: '1rem',
    },
  },
  dialogContent: {
    padding: '1rem',
    backgroundColor: theme.palette.background.paper,
  },
  dialogTitle: {
    flex: 1,
    maxWidth: '92%',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  dialogActions: {
    boxShadow: 'none',
    backgroundColor: theme.palette.background.paper,
    borderTop: `1px solid ${theme.palette.background.default}`,
    [theme.breakpoints.down('xs')]: {
      padding: '1rem',
      justifyContent: 'flex-end',
      height: headerHeight,
    },
  },
  actionButton: {
    [theme.breakpoints.down('xs')]: {
      flexGrow: 1,
    },
  },
  loaderWrapper: {
    height: '100%',
  },
  loaderContent: {
    flexGrow: 1,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
  },
}));
