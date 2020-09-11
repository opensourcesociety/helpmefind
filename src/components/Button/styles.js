import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  main: {
    minWidth: 48,
    width: 'auto',
    border: 'none',
    display: 'flex',
    flexShrink: 0,
    outline: 'none',
    cursor: 'pointer',
    fontSize: 'inherit',
    textAlign: 'center',
    padding: '0 0.8rem',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center',
    height: 42,
    '&:disabled, &.disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  small: {
    height: 32,
    borderRadius: 8,
    fontSize: '0.8rem',
    padding: '0.4rem 0.6rem',
  },
  fullWidth: {
    width: '100%',
  },
  minWidth: {
    minWidth: '12.5rem',
  },
}));
