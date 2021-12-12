import classes from  './Cart.module.css';
import iconDelete from '../../source/images/icon-delete.svg';
import CartModal from '../UI/CartModal';
import Button from '../UI/Button';


const Cart = (props) =>{

        const cartItems = (<ul className={classes['cart-items']}>{[{id:1, name: 'Sneakers', amount: 3, 
        price: 125}].map((item)=><li>{item.price}</li>)}</ul>);
        
    return <CartModal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Sneakers</span>
            <span>$125 x 3 </span><span>$375</span>
            <img src={iconDelete} alt='delete icon'/>
        </div>
        <Button className={classes.addBtn} onClose={props.onClose}>Checkout</Button>
    </CartModal>
}

export default Cart;