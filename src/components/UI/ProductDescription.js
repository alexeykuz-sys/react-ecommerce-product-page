import classes from './ProductDescription.module.css';

const ProductDescription = () => {
    return (
        <div className={classes.description}>
            <div className={classes.textorange}>Sneaker Company</div>
            <h1 className={classes.textheader}>Fall Limited Edition Sneakers</h1>
            <div className={classes.textdescription}>These low-profile sneakers are your perfect casual
                wear companion. Featuring a durable rubber outer sole,
                they'll withstand everything the weather can offer.
            </div>
            <div className={classes.price}>$125.00</div>
            <div className={classes.fullprice}>$250</div>
        </div>
    );
}

export default ProductDescription;