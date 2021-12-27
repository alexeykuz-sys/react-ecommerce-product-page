import { useRef, useState } from 'react';
import Input from './Input';
import Button from './Button';
import CartIcon from '../Cart/CartIcon';

const ProductForm = (props) => {
    const [amountIsValid, setAmountIsValid]=useState(true)

    const amountInputRef=useRef()

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber <0 ||
            enteredAmountNumber > 10) {
                setAmountIsValid(false)
                return
        }
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
                }}/>
                <Button><CartIcon/>Add to Cart</Button>
                {!amountIsValid && <p>Please enter valid amount</p>}
            </form>
    );
}

export default ProductForm;