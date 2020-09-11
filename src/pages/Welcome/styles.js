import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%',
  },
  wrapper: {
    display: 'flex',
    'user-select': 'none',
    'align-items': ({ isSmallScreen }) => isSmallScreen ? 'center' : 'initial',
    'text-align': 'center',
  },
  title: {
    'font-weight': 100,
  },
}));

export default useStyles;
