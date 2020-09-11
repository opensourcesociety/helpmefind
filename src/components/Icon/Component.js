import React from 'react';
import PropTypes, { elementType } from 'prop-types';
import clsx from 'clsx';

import useStyles from './styles';

function Icon(props) {
  const classes = useStyles();
  const {
    size,
    color,
    onClick,
    className,
    hoverColor,
    withCursor,
    component: IconComponent,
  } = props;
  
  const iconClassName = clsx(
    classes.icon,
    classes[`size-${size}`],
    className,
    {
      [classes[color]]: !!color,
      [classes.withCursor]: !!onClick || withCursor,
      [classes[`hover-${hoverColor}`]]: hoverColor,
    },
  );
  
  return (
    <div
      onClick={onClick}
      className={iconClassName}
    >
      <IconComponent/>
    </div>
  );
}

Icon.defaultProps = {
  className: '',
  size: 'default',
  color: 'default',
  hoverColor: null,
  withCursor: false,
};

Icon.propTypes = {
  onClick: PropTypes.func,
  withCursor: PropTypes.bool,
  className: PropTypes.string,
  component: elementType.isRequired,
  size: PropTypes.oneOf(['default', 'medium']),
  hoverColor: PropTypes.oneOf(['primary', 'secondary', 'white', 'black']),
  color: PropTypes.oneOf(['default', 'white', 'primary', 'secondary', 'grey']),
};

export default Icon;
