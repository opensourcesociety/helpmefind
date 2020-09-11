import React, { forwardRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import useFlexStyles from './styles';

const Fb = forwardRef((props, ref) => {
  const fClasses = useFlexStyles();
  const {
    row,
    wrap,
    grow,
    column,
    noGrow,
    shrink,
    noWrap,
    inline,
    children,
    alignEnd,
    noShrink,
    className,
    alignStart,
    justifyEnd,
    alignCenter,
    justifyStart,
    justifyCenter,
    justifyAround,
    justifyBetween,
    ...otherProps
  } = props;
  
  const compClasses = clsx(className, {
    [fClasses.main]: !inline,
    [fClasses.inline]: inline,
    [fClasses.row]: row,
    [fClasses.wrap]: wrap,
    [fClasses.grow]: grow,
    [fClasses.column]: column,
    [fClasses.noGrow]: noGrow,
    [fClasses.shrink]: shrink,
    [fClasses.noWrap]: noWrap,
    [fClasses.alignEnd]: alignEnd,
    [fClasses.noShrink]: noShrink,
    [fClasses.alignStart]: alignStart,
    [fClasses.justifyEnd]: justifyEnd,
    [fClasses.alignCenter]: alignCenter,
    [fClasses.justifyStart]: justifyStart,
    [fClasses.justifyCenter]: justifyCenter,
    [fClasses.justifyAround]: justifyAround,
    [fClasses.justifyBetween]: justifyBetween,
  });
  
  return (
    <div
      ref={ref}
      {...otherProps}
      className={compClasses}
    >
      {children}
    </div>
  );
});

Fb.defaultProps = {
  className: '',
  
  row: false,
  wrap: false,
  grow: false,
  inline: false,
  column: false,
  noGrow: false,
  shrink: false,
  noWrap: false,
  noShrink: true,
  alignEnd: false,
  justifyEnd: false,
  alignStart: false,
  alignCenter: false,
  justifyStart: false,
  justifyCenter: false,
  justifyBetween: false,
};

Fb.propTypes = {
  className: PropTypes.string,
  
  row: PropTypes.bool,
  grow: PropTypes.bool,
  wrap: PropTypes.bool,
  inline: PropTypes.bool,
  noWrap: PropTypes.bool,
  column: PropTypes.bool,
  noGrow: PropTypes.bool,
  shrink: PropTypes.bool,
  alignEnd: PropTypes.bool,
  noShrink: PropTypes.bool,
  alignStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyBetween: PropTypes.bool,
};

export default Fb;
