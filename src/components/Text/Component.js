import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

function Text(props) {
  const {
    bold,
    bgColor,
    fontSize,
    truncate,
    multiRow,
    rowCount,
    className,
    textColor,
    rowHeight,
    alignLeft,
    alignRight,
    alignCenter,
    ...textProps
  } = props;
  const classes = useStyles({ fontSize, rowCount, rowHeight, bgColor });
  
  const textClasses = clsx(
    className,
    {
      [classes.bold]: bold,
      [classes.truncate]: truncate,
      [classes.multiRow]: !multiRow,
      [classes.alignLeft]: alignLeft,
      [classes.alignRight]: alignRight,
      [classes.alignCenter]: alignCenter,
      [classes[`color-${textColor}`]] : textColor,
    }
  );
  
  return (
    <Typography
      {...textProps}
      className={textClasses}
    />
  );
}

Text.defaultProps = {
  bold: false,
  fontSize: 1,
  rowCount: 3,
  className: '',
  rowHeight: 1.2,
  multiRow: true,
  truncate: false,
  alignLeft: true,
  alignRight: false,
  alignCenter: false,
};

Text.propTypes = {
  bold: PropTypes.bool,
  truncate: PropTypes.bool,
  multiRow: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignRight: PropTypes.bool,
  rowCount: PropTypes.number,
  fontSize: PropTypes.number,
  className: PropTypes.string,
  rowHeight: PropTypes.number,
  alignCenter: PropTypes.bool,
  textColor: PropTypes.string,
  bgColor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

export default Text;
