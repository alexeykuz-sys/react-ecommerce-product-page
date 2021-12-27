import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Product.module.css';
import ProductForm from './ProductForm';

const Product = (props)=>{
    const cartCtx= useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            // id props will come fomr availablemeal component
            name: props.name,
            amount: amount ,
            price: props.price
        })
        // addItem is defined in CartProvider
    }
    return (
        <li >
            <div>
            <div className={classes.textorange}>{props.company}</div>
                <h3>{props.name}</h3>
                <div className={classes.textdescription}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <ProductForm onAddToCart = {addToCartHandler} id={props.id}/>
            </div>
        </li>
    )

}

export default Product;