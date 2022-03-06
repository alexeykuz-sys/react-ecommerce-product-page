import { useContext } from 'react';
import classes from  './Cart.module.css';
import iconDelete from '../../source/images/icon-delete.svg';
import CartModal from '../UI/CartModal';
import Button from '../UI/Button';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';


const Cart = (props) =>{

    const cartCtx = useContext(CartContext);

    // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item,amount:1})
    }

        const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item)=>(
            <CartItem 
            key={item.id}
            name={item.name} 
            amount={item.amount} 
            price={item.price} 
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}/>
            ))}
        </ul>);
        
    return (
    <CartModal onClose={props.onClose}>
        <div>Cart</div>
        <hr></hr>
        {!hasItems && <div>
        
        <div>No items in the basket</div>
        </div>
        }
        {cartItems}
        {hasItems &&     
        <Button className={classes.addBtn} onClose={props.onClose}>Checkout</Button>}
    </CartModal>
    );
}

export default Cart;