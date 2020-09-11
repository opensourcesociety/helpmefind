import React, { useCallback } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import Fb from 'components/Fb';

import useStyles from './styles';

function Loading(props) {
  const classes = useStyles();
  const {
    style,
    children,
    className,
    isLoading,
    spinnerSize,
    onlySpinner,
    spinnerColor,
    isFullScreen,
    contentClassName,
    spinnerClassName,
    wrapperFullWidth,
  } = props;

  const Spinner = useCallback(() => (
    <CircularProgress
      size={spinnerSize}
      color={spinnerColor}
      className={spinnerClassName}
    />
  ), [spinnerSize, spinnerColor, spinnerClassName]);

  return onlySpinner
    ? <Spinner />
    : (
      <div
        style={style}
        className={clsx(classes.loaderWrapper, className, { [classes.loaderWrapperFullWidth]: wrapperFullWidth })}
      >
        {isLoading && (
          <Fb
            row
            alignCenter
            justifyCenter
            className={clsx(
              classes.loaderOverlay, {
              [classes.isFullScreen]: isFullScreen,
            },
            )
            }
          >
            {<Spinner />}
          </Fb>
        )}
        <div className={clsx(classes.loaderContent, contentClassName)}>
          {children}
        </div>
      </div>
    );
}

Loading.propTypes = {
  isLoading: PropTypes.bool,
  onlySpinner: PropTypes.bool,
  className: PropTypes.string,
  isFullScreen: PropTypes.bool,
  spinnerSize: PropTypes.number,
  spinnerColor: PropTypes.string,
  wrapperFullWidth: PropTypes.bool,
  spinnerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
};

Loading.defaultProps = {
  isLogo: true,
  className: '',
  spinnerSize: 24,
  isLoading: false,
  onlySpinner: false,
  isFullScreen: false,
  spinnerClassName: '',
  contentClassName: '',
  wrapperFullWidth: true,
  spinnerColor: 'primary',
};

export default Loading;
