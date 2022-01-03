import { useContext } from 'react';
import CartContext from '../../store/cart-context';

import classes from './Product.module.css';
import ProductForm from './ProductForm';

const Product = (props)=>{
    const cartCtx= useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`
    const fullprice = `$${props.fullprice.toFixed(2)}`

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            // id props will come fomr products component
            name: props.name,
            amount: amount ,
            price: props.price,
        })
        // addItem is defined in CartProvider
    }
    return (
        <li>
            <div className={classes.textorange}>{props.company}</div>
                <h3>{props.name}</h3>
                <div className={classes.textdescription}>{props.description}</div>
                <div className={classes.pricewrapper}>
                    <div className={classes.price}>{price}</div>
                    <div className={classes.fullprice}>{fullprice}</div>
                </div>
                <ProductForm onAddToCart = {addToCartHandler} id={props.id}/>
        </li>  
    )

}

export default Product;