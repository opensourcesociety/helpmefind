import { fade } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignCenter: {
    textAlign: 'center',
  },
  'color-white': {
    color: theme.palette.background.main,
  },
  multiRow: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'inline-block',
    lineHeight: ({ rowHeight }) => `${rowHeight}rem`,
    fontSize: ({ fontSize }) => `${fontSize}rem`,
    height: ({ rowHeight, rowCount }) => `calc(${rowHeight * rowCount}rem - 2px)`,
    '&::after': {
      content: '""',
      right: 0,
      bottom: 0,
      width: '17%',
      color: 'white',
      textAlign: 'right',
      position: 'absolute',
      height: ({ rowHeight }) => `${rowHeight}rem`,
      background: ({ bgColor = theme.palette.background.main }) => bgColor !== false ?
        `linear-gradient(to right, ${fade(bgColor, 0)}, ${fade(bgColor, 1)} 50%)` : 'transparent',
    },
  },
  bold: {
    fontWeight: 'bold',
  },
  truncate: {
    width: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}));
