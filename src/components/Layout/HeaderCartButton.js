import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = ()=>{
    return (
        <div className={classes.cartbutton}>
            <span className={classes.carticon}>
                <CartIcon/>
            </span>
            <span className={classes.badge}>3</span>
        </div>
    );
}

export default HeaderCartButton;