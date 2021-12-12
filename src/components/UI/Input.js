import CartIcon from '../Cart/CartIcon';
import minusSign from '../../source/images/icon-minus.svg';
import plusSign from '../../source/images/icon-plus.svg';

import  classes from './Input.module.css';
import Button from './Button';


const Input = (props) => {
    return(
    <div className={classes.inputWrapper}>
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <img src={minusSign} alt='minus sign'/>
            <input {...props.input}/>
            <img src={plusSign} alt='plus sign'/>
        </div>
       
            <Button><CartIcon/>Add to Cart</Button>
       
    </div>
    );
}

export default Input;