import { makeStyles, fade } from '@material-ui/core';

export default makeStyles(theme => ({
  loaderWrapper: {
    position: 'relative',
  },
  loaderWrapperFullWidth: {
    width: '100%',
  },
  loaderOverlay: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: fade(theme.palette.background.default, 0.5),
  },
  loaderContent: {
    height: '100%',
  },
  isFullScreen: {
    position: 'fixed',
  },
}));
