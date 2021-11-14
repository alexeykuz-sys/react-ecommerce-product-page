import { Fragment } from 'react';
import CartIcon from '../Cart/CartIcon';
import avatarImage from '../../source/images/image-avatar.png'
import classes from './Header.module.css'

const Header = (props) =>{

    return (
        <Fragment>
            <header className={classes.header}>
                <h1 className={classes.logo}>Sneakers</h1>
                <ul className={classes.menu}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <CartIcon/>
                <img src={avatarImage} alt='user face'/>
            </header>
        </Fragment>
    );
};

export default Header;