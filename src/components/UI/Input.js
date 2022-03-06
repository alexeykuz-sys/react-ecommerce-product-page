import React from 'react';
import minusSign from '../../source/images/icon-minus.svg';
import plusSign from '../../source/images/icon-plus.svg';

import  classes from './Input.module.css';



const Input = React.forwardRef((props, ref) => {
    return(
    <div className={classes.inputWrapper}>
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* <img src={minusSign} alt='minus sign'/> */}
            <button onClick={props.onRemove}>−</button>
            <input ref={ref} {...props.input}/>
            <button onClick={props.onAdd}>+</button>
            {/* <img src={plusSign} alt='plus sign'/> */}
        </div>
    </div>
    );
});

export default Input;