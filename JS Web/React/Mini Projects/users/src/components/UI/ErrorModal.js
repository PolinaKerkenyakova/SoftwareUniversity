import ReactDOM from 'react-dom';
import React from 'react';

import './ErrorModal.css';

import Card from './Card';
import Button from './Button';

const Backdrop = props => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
}

const Modal = props => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>{props.title}</h2>
            </header>
            <div className="content">
                <p>{props.message}</p>
            </div>
            <footer className="actions">
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('overlay-root'))}
        </React.Fragment>
    )
}

export default ErrorModal;