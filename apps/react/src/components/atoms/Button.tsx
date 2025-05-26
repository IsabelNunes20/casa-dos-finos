import React from 'react';

import classes from './Button.module.scss';

function Button() {
  return <button className={classes.button} title="Beer" type="button" aria-label="Go to Beer Details">
    Beer
    </button>
}

export default Button;
