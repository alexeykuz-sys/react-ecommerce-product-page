
// import ProductForm from './ProductForm';
// import CartContext from '../../store/cart-context';
import Products from './Products';


const ProductDescription = (props) => {
    // const cartCtx = useContext(CartContext);

    // const addToCartHandler = amount => {
    //     cartCtx.addItem({
    //         id:props.id,
    //         name:props.name,
    //         amount:amount,
    //         price: props.price
    //     })


        

    // }
    return (
            <Products/>
            /* <ProductForm onAddToCart={addToCartHandler} id={props.id}/> */

    );
}

export default ProductDescription;