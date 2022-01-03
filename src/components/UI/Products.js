import Product from "./Product";
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    
    {
        id: 'item1',
        company:'Sneaker Company',
        name: 'Fall Limited Edition Sneakers',
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 125.00,
        fullprice:250.00
    }
    
];


const Products = () => {

    const productsList = DUMMY_PRODUCTS.map(product =>
    <Product
    id={product.id} 
    key={product.id}
    company= {product.company}
    product={product.name} 
    description={product.description} 
    price={product.price}
    fullprice={product.fullprice}
    />);

    return (
        
            <ul className={classes.description}>{productsList}</ul>
        
    )

};

export default Products;