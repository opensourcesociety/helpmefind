import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import Slide from '@material-ui/core/Slide';
import MUIDialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { ReactComponent as CloseIcon } from 'images/icons/close.svg';

import Fb from 'components/Fb';
import Icon from 'components/Icon';
import Text from 'components/Text';
import Button from 'components/Button';
import Loading from 'components/Loading';

import useStyles from './styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide ref={ref} {...props} />;
});

Transition.defaultProps = {
  direction: 'up',
};

function Dialog(props) {
  const classes = useStyles();
  const {
    title,
    scroll,
    onClose,
    children,
    onCancel,
    onAccept,
    cancelText,
    fullScreen,
    isLoading,
    acceptText,
    disableButtons,
    acceptBtnProps,
    cancelBtnProps,
    titleClassName,
    headerClassName,
    contentClassName,
    actionsAdditionalContent,
    ...dialogProps
  } = props;
  
  return (
    <MUIDialog
      {...dialogProps}
      scroll={scroll}
      fullScreen={fullScreen}
      onClose={onClose || onCancel}
      TransitionComponent={Transition}
    >
      <Loading
        isLoading={isLoading}
        className={classes.loaderWrapper}
        contentClassName={classes.loaderContent}
      >
        <Fb
          row
          alignCenter
          justifyEnd={!title}
          justifyBetween={!!title}
          className={clsx(classes.dialogTileWrapper, headerClassName)}
        >
          {title && (
            <div className={clsx(classes.dialogTitle, titleClassName)}>
              <Text truncate title={title}>
                {title}
              </Text>
            </div>
          )}
          
          <Icon
            component={CloseIcon}
            onClick={onClose || onCancel}
          />
        </Fb>
        
        <DialogContent className={clsx(classes.dialogContent, contentClassName)}>
          {typeof children === 'function' ? children() : children}
        </DialogContent>
        
        {(onCancel || onAccept) && (
          <DialogActions className={classes.dialogActions}>
            {actionsAdditionalContent}
            {onCancel && (
              <Button
                type="submit"
                color="white"
                onClick={onCancel}
                {...cancelBtnProps}
                className={clsx(classes.actionButton, cancelBtnProps.className)}
                disabled={disableButtons || !!cancelBtnProps.disabled}
              >
                {cancelText}
              </Button>
            )}
            {onAccept && (
              <Button
                type="submit"
                color="secondary"
                onClick={onAccept}
                {...acceptBtnProps}
                className={clsx(classes.actionButton, acceptBtnProps.className)}
                disabled={disableButtons || !!acceptBtnProps.disabled}
              >
                {acceptText}
              </Button>
            )}
          </DialogActions>
        )}
      </Loading>
    </MUIDialog>
  );
}

Dialog.defaultProps = {
  title: '',
  scroll: 'paper',
  fullScreen: true,
  isLoading: false,
  acceptBtnProps: {},
  cancelBtnProps: {},
  titleClassName: '',
  headerClassName: '',
  cancelText: 'Cancel',
  acceptText: 'Accept',
  contentClassName: '',
  disableButtons: false,
  actionsAdditionalContent: null,
};

Dialog.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  onAccept: PropTypes.func,
  isLoading: PropTypes.bool,
  fullScreen: PropTypes.bool,
  cancelText: PropTypes.string,
  acceptText: PropTypes.string,
  disableButtons: PropTypes.bool,
  titleClassName: PropTypes.string,
  headerClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  actionsAdditionalContent: PropTypes.node,
  acceptBtnProps: PropTypes.shape({}),
  cancelBtnProps: PropTypes.shape({}),
  scroll: PropTypes.oneOf(['paper', 'body']),
};

export default Dialog;
