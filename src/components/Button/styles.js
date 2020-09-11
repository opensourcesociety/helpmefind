import { makeStyles, darken } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
    height: theme.app.inputHeight,
    borderRadius: theme.app.radius,
    '&:hover:not(:disabled)': {
      boxShadow: theme.app.shadow,
    },
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
  'color-grey': {
    ...theme.app.transition,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.grey.light,
    '&:hover:not(:disabled)': {
      backgroundColor: darken(theme.palette.grey.light, 0.03),
    },
  },
  'color-secondary': {
    ...theme.app.transition,
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    '&:hover:not(:disabled)': {
      backgroundColor: darken(theme.palette.secondary.main, 0.03),
    },
  },
  'color-primary': {
    color: 'white',
    ...theme.app.transition,
    backgroundColor: theme.palette.primary.main,
    '&:hover:not(:disabled)': {
      background: darken(theme.palette.primary.main, 0.1),
    },
  },
  'color-white': {
    ...theme.app.transition,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.main,
    border: `1px solid ${theme.palette.text.primary}`,
    '&:disabled': {
      opacity: 0.7,
    },
  },
  simple: {
    cursor: 'pointer',
    color: theme.palette.text.primary,
    position: 'relative',
    display: 'inline-block',
    '&:hover:not(:disabled)': {
      color: theme.palette.primary.main,
    },
    '&:disabled': {
      color: theme.palette.grey.light,
    },
  },
}));
