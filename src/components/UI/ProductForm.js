import { useRef, useState } from 'react';
import Input from './Input';
import Button from './Button';
import CartIcon from '../Cart/CartIcon';

const ProductForm = (props) => {
    const [amountIsValid, setAmountIsValid]=useState(true);

    const amountInputRef=useRef()

    const submitHandler = event => {
        event.preventDefault();
        // always a string//
        const enteredAmount = amountInputRef.current.value;
        // converts to the number
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber <0 ||
            enteredAmountNumber > 10) {
                setAmountIsValid(false)
                return
        }
        // passes only validated amount, other info will be retreaved from mealitem comp
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        
            <form onSubmit={submitHandler}>
                <Input 
                    ref={amountInputRef}
                    label='Amount' 
                    input={{
                    id: 'amount',
                    type: 'number',
                    min: 0,
                    max: 10,
                    step:1,
                    defaultValue:0,
                }}
                />
                <Button><CartIcon/>Add to Cart</Button>
                {!amountIsValid && <p>Please enter valid amount 1 to 10</p>}
            </form>
    );
}

export default ProductForm;