import React from 'react';

import classes from './Button.module.scss';

export const Button: React.FC = () => {
  return <button className={classes.button} title="Beer" type="button" aria-label="Go to Beer Details">
    Beer
    </button>
}
