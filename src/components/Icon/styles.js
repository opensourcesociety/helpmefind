import { makeStyles } from '@material-ui/core/styles';

// TODO: fix icon styles for hove state
export default makeStyles(theme => ({
  icon: {
    '& > svg': {
      width: '100%',
      height: '100%',
      fill: theme.palette.text.primary,
    }
  },
  'size-default': {
    width: 20,
    height: 20,
  },
  'size-medium': {
    width: 16,
    height: 16,
  },
  grey: {
    '& > svg': {
      fill: theme.palette.grey.darkGrey,
    },
  },
  white: {
    '& > svg': {
      fill: theme.palette.background.main,
    },
  },
  primary: {
    '& > svg': {
      fill: theme.palette.primary.main,
    },
  },
  secondary: {
    '& > svg': {
      fill: theme.palette.secondary.main,
    },
  },
  withCursor: {
    cursor: 'pointer',
  },
  'hover-primary': {
    '&:hover > svg': {
      fill: theme.palette.primary.main,
    },
  },
  'hover-secondary': {
    '&:hover > svg': {
      fill: theme.palette.secondary.main,
    },
  },
  'hover-white': {
    '&:hover > svg': {
      fill: theme.palette.background.main,
    },
  },
  'hover-black': {
    '&:hover > svg': {
      fill: theme.palette.text.primary,
    },
  },
}));
