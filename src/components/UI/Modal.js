import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

import CloseIcon from '@mui/icons-material/Close';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onClose} />
};
const ModalOverlay = props => {
  return (<div className={classes.modal}>
    <CloseIcon className={classes.icon} color="secondary" sx={{ fontSize: 28 }} onClick={props.onClose}/>
    <div className={classes.content}>{props.children}</div>
  </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = props => {
  return <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalElement)}
  </>
};

export default Modal;