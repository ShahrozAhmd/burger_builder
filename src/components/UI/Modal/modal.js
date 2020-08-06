import React from 'react';
import classes from './modal.module.css';

export default function Modal(props) {
    return (
        <div className= {`${classes.Modal} ${props.show? classes.showModal: classes.hideModal}`}>
            {props.children}
        </div>
    )
};


