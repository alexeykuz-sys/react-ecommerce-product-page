import Input from './Input';
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
            <div className={classes.pricewrapper}>
                <div className={classes.price}>$125.00</div>
                <div className={classes.fullprice}>$250</div>
            </div>
            <Input label='Amount' input={{
                id: 'amount',
                type: 'number',
                min: 0,
                max: 10,
                step:1,
                defaultValue:0,
            }}/>
        </div>
    );
}

export default ProductDescription;