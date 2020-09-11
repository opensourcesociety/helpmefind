import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { isMobile } from 'utils';

import useStyles from './styles';

const buttonClass = 'an-button';

function Button(props) {
  const {
    small,
    color,
    variant,
    disabled,
    children,
    minWidth,
    fullWidth,
    className,
    ...btnProps
  } = props;
  
  const classes = useStyles(props);
  const isSimple = variant === 'simple';
  const colorClass = classes[`color-${color}`];
  
  const compClasses = clsx(
    buttonClass,
    classes.main,
    {
      [colorClass]: !!color,
      [classes.small]: small,
      [classes[variant]]: !!variant,
      [classes.fullWidth]: fullWidth,
      [classes.minWidth]: !fullWidth && minWidth,
    },
    className,
  );
  
  if (isSimple) {
    return (
      <span
        onClick={props.onClick}
        className={
          clsx(
            buttonClass,
            classes.simple,
            {
              [classes.disabled]: disabled,
            },
            className,
          )
        }>
        {children}
      </span>
    );
  }
  
  return (
    <button
      tabIndex={0}
      {...btnProps}
      disabled={disabled}
      className={compClasses}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  small: false,
  color: 'grey',
  className: '',
  disabled: false,
  fullWidth: false,
  variant: 'default',
  minWidth: !isMobile,
};

Button.propTypes = {
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  minWidth: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'simple']),
  color: PropTypes.oneOf(['secondary', 'primary', 'grey', 'white']),
};

export default Button;
