import classes from './Modal.module.css';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div>{props.children}</div>
    </div>
}
const Modal = (props) => {
    const portElement = document.getElementById('overlays')
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portElement)}
        </Fragment>
    );
};

export default Modal;