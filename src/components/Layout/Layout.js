﻿import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>
                toolbar, sidedrawer, backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default layout;